// Telemetry service for tracking user interactions and system events

class TelemetryService {
  constructor() {
    this.endpoint = '/v1/telemetry/event';
    this.batchSize = 10;
    this.batchTimeout = 5000; // 5 seconds
    this.eventQueue = [];
    this.batchTimer = null;
  }

  /**
   * Track an event with properties
   * @param {string} name - Event name
   * @param {object} props - Event properties
   * @param {boolean} immediate - Send immediately instead of batching
   */
  trackEvent(name, props = {}, immediate = false) {
    const event = {
      name,
      props,
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    if (immediate) {
      this.sendEvent(event);
    } else {
      this.queueEvent(event);
    }
  }

  /**
   * Track chat events
   */
  trackChatEvent(type, props = {}) {
    this.trackEvent('chat', {
      type,
      ...props
    });
  }

  /**
   * Track visualizer interactions
   */
  trackVisualizerEvent(type, props = {}) {
    this.trackEvent('visualizer', {
      type,
      ...props
    });
  }

  /**
   * Track button clicks
   */
  trackButtonClick(buttonId, props = {}) {
    this.trackEvent('button_click', {
      buttonId,
      ...props
    });
  }

  /**
   * Track page views
   */
  trackPageView(page, props = {}) {
    this.trackEvent('page_view', {
      page,
      ...props
    });
  }

  /**
   * Track user engagement metrics
   */
  trackEngagement(type, value, props = {}) {
    this.trackEvent('engagement', {
      type,
      value,
      ...props
    });
  }

  /**
   * Track consensus entropy
   */
  trackConsensusEntropy(entropy, props = {}) {
    this.trackEvent('consensus_entropy', {
      entropy,
      ...props
    });
  }

  /**
   * Queue event for batch processing
   */
  queueEvent(event) {
    this.eventQueue.push(event);

    if (this.eventQueue.length >= this.batchSize) {
      this.flushQueue();
    } else if (!this.batchTimer) {
      this.batchTimer = setTimeout(() => {
        this.flushQueue();
      }, this.batchTimeout);
    }
  }

  /**
   * Flush queued events
   */
  async flushQueue() {
    if (this.batchTimer) {
      clearTimeout(this.batchTimer);
      this.batchTimer = null;
    }

    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    try {
      await this.sendEvents(events);
    } catch (error) {
      console.error('Failed to send telemetry events:', error);
      // Re-queue events on failure
      this.eventQueue.unshift(...events);
    }
  }

  /**
   * Send single event
   */
  async sendEvent(event) {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('Telemetry send error:', error);
      throw error;
    }
  }

  /**
   * Send batch of events
   */
  async sendEvents(events) {
    try {
      const response = await fetch(this.endpoint + '/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('Telemetry batch send error:', error);
      throw error;
    }
  }

  /**
   * Get or create session ID
   */
  getSessionId() {
    let sessionId = localStorage.getItem('telemetry_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('telemetry_session_id', sessionId);
    }
    return sessionId;
  }

  /**
   * Initialize telemetry tracking
   */
  init() {
    // Track initial page view
    this.trackPageView(window.location.pathname);

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      this.trackEvent('visibility_change', {
        visible: !document.hidden
      });
    });

    // Track beforeunload to flush remaining events
    window.addEventListener('beforeunload', () => {
      this.flushQueue();
    });

    // Track focus/blur events
    window.addEventListener('focus', () => {
      this.trackEvent('window_focus');
    });

    window.addEventListener('blur', () => {
      this.trackEvent('window_blur');
    });

    console.log('Telemetry service initialized');
  }

  /**
   * Get telemetry statistics
   */
  getStats() {
    return {
      queueSize: this.eventQueue.length,
      sessionId: this.getSessionId(),
      endpoint: this.endpoint
    };
  }
}

// Create singleton instance
const telemetryService = new TelemetryService();

// Export functions for easy use
export const trackEvent = (name, props, immediate) => 
  telemetryService.trackEvent(name, props, immediate);

export const trackChatEvent = (type, props) => 
  telemetryService.trackChatEvent(type, props);

export const trackVisualizerEvent = (type, props) => 
  telemetryService.trackVisualizerEvent(type, props);

export const trackButtonClick = (buttonId, props) => 
  telemetryService.trackButtonClick(buttonId, props);

export const trackPageView = (page, props) => 
  telemetryService.trackPageView(page, props);

export const trackEngagement = (type, value, props) => 
  telemetryService.trackEngagement(type, value, props);

export const trackConsensusEntropy = (entropy, props) => 
  telemetryService.trackConsensusEntropy(entropy, props);

export default telemetryService; 