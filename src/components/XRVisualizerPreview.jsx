import React, { useEffect, useRef, useState } from 'react';

export default function XRVisualizerPreview() {
  const canvasRef = useRef(null);
  const wsRef = useRef(null);
  const animationRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [agents, setAgents] = useState([]);
  const [intentArcs, setIntentArcs] = useState([]);
  const [fps, setFps] = useState(60);
  const [frameTime, setFrameTime] = useState(16);

  // Initialize canvas and WebGL context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // WebSocket connection for real-time data
  useEffect(() => {
    const connectWebSocket = () => {
      try {
        wsRef.current = new WebSocket('wss://api.zp.ai/ws/visualizer');
        
        wsRef.current.onopen = () => {
          setIsConnected(true);
          console.log('WebSocket connected to visualizer');
        };

        wsRef.current.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            
            if (data.type === 'agents') {
              setAgents(data.agents || []);
            } else if (data.type === 'intentArcs') {
              setIntentArcs(data.arcs || []);
            } else if (data.type === 'telemetry') {
              // Update performance metrics
              if (data.fps) setFps(data.fps);
              if (data.frameTime) setFrameTime(data.frameTime);
              
              // Log telemetry to backend
              fetch('/v1/telemetry/render', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  fps: data.fps,
                  frameTime: data.frameTime,
                  timestamp: Date.now()
                })
              }).catch(console.error);
            }
          } catch (error) {
            console.error('Error parsing WebSocket message:', error);
          }
        };

        wsRef.current.onerror = (error) => {
          console.error('WebSocket error:', error);
          setIsConnected(false);
        };

        wsRef.current.onclose = () => {
          setIsConnected(false);
          console.log('WebSocket disconnected, attempting to reconnect...');
          
          // Attempt to reconnect after 5 seconds
          setTimeout(connectWebSocket, 5000);
        };

      } catch (error) {
        console.error('Failed to connect WebSocket:', error);
        setIsConnected(false);
      }
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  // Animation loop with performance monitoring
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      frameCount++;

      // Update FPS every second
      if (currentTime - lastFpsUpdate >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / (currentTime - lastFpsUpdate));
        setFps(currentFps);
        setFrameTime(Math.round(deltaTime));
        frameCount = 0;
        lastFpsUpdate = currentTime;
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background grid
      drawGrid(ctx, canvas.width, canvas.height);

      // Draw agents
      drawAgents(ctx, agents, canvas.width, canvas.height);

      // Draw intent arcs
      drawIntentArcs(ctx, intentArcs, canvas.width, canvas.height);

      // Draw connection status
      drawConnectionStatus(ctx, isConnected, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [agents, intentArcs, isConnected]);

  // Drawing functions
  const drawGrid = (ctx, width, height) => {
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    const gridSize = 50;
    
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  const drawAgents = (ctx, agents, width, height) => {
    agents.forEach((agent, index) => {
      const x = (agent.x || Math.random()) * width;
      const y = (agent.y || Math.random()) * height;
      const radius = agent.radius || 10;
      const color = agent.color || '#00ffff';

      // Draw agent circle
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw agent label
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(agent.id || `Agent ${index}`, x, y + radius + 15);
    });
  };

  const drawIntentArcs = (ctx, arcs, width, height) => {
    arcs.forEach((arc) => {
      const startX = arc.startX * width;
      const startY = arc.startY * height;
      const endX = arc.endX * width;
      const endY = arc.endY * height;
      const intensity = arc.intensity || 0.5;

      // Draw arc line
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = `rgba(0, 255, 255, ${intensity})`;
      ctx.lineWidth = 3 * intensity;
      ctx.stroke();

      // Draw arrowhead
      const angle = Math.atan2(endY - startY, endX - startX);
      const arrowLength = 10;
      const arrowAngle = Math.PI / 6;

      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(
        endX - arrowLength * Math.cos(angle - arrowAngle),
        endY - arrowLength * Math.sin(angle - arrowAngle)
      );
      ctx.moveTo(endX, endY);
      ctx.lineTo(
        endX - arrowLength * Math.cos(angle + arrowAngle),
        endY - arrowLength * Math.sin(angle + arrowAngle)
      );
      ctx.strokeStyle = `rgba(0, 255, 255, ${intensity})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  };

  const drawConnectionStatus = (ctx, connected, width, height) => {
    const status = connected ? 'Connected' : 'Disconnected';
    const color = connected ? '#00ff00' : '#ff0000';
    
    ctx.fillStyle = color;
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Status: ${status}`, 10, 25);
  };

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full bg-black rounded-lg"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
      />
      
      {/* Performance overlay */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded text-sm">
        <div>FPS: {fps}</div>
        <div>Frame Time: {frameTime}ms</div>
        <div>Agents: {agents.length}</div>
      </div>
      
      {/* Connection indicator */}
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-white text-sm">
          {isConnected ? 'Connected' : 'Disconnected'}
        </span>
      </div>
    </div>
  );
} 