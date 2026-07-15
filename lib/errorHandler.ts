/**
 * Global Error Handler - Catches and logs errors to prevent silent failures
 */

export class ArcToneError extends Error {
  constructor(
    message: string,
    public code: string,
    public severity: 'low' | 'medium' | 'high' | 'critical',
    public context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'ArcToneError';
  }
}

/**
 * Log errors with context for debugging
 */
export function logError(error: unknown, context?: Record<string, unknown>) {
  const timestamp = new Date().toISOString();
  
  let errorMessage = 'Unknown error';
  let errorStack = '';

  if (error instanceof Error) {
    errorMessage = error.message;
    errorStack = error.stack || '';
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = JSON.stringify(error);
  }

  const errorLog = {
    timestamp,
    message: errorMessage,
    stack: errorStack,
    context,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Server',
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('[ArcTone Error]', errorLog);
  }

  return errorLog;
}

/**
 * Validate component rendering
 */
export function validateComponentMount(componentName: string): boolean {
  try {
    if (typeof document !== 'undefined' && document.querySelector) {
      const element = document.querySelector(`[data-component="${componentName}"]`);
      return !!element;
    }
    return true; // Server-side, skip DOM check
  } catch (error) {
    logError(error, { component: componentName });
    return false;
  }
}

/**
 * Validate WhatsApp URL format
 */
export function validateWhatsAppUrl(url: string): boolean {
  try {
    const whatsappPattern = /^https:\/\/wa\.me\/\d+\?text=.+$/;
    return whatsappPattern.test(url);
  } catch (error) {
    logError(error, { url });
    return false;
  }
}

/**
 * Safe fetch with timeout and error handling
 */
export async function safeFetch(
  url: string,
  options: RequestInit & { timeout?: number } = {}
): Promise<Response> {
  const timeout = options.timeout || 5000;
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new ArcToneError(
        `HTTP ${response.status}: ${response.statusText}`,
        'HTTP_ERROR',
        'high',
        { url, status: response.status }
      );
    }

    return response;
  } catch (error) {
    logError(error, { url, timeout });
    throw new ArcToneError(
      'Failed to fetch resource',
      'FETCH_ERROR',
      'high',
      { url, originalError: error instanceof Error ? error.message : String(error) }
    );
  }
}

/**
 * Handle rendering errors gracefully
 */
export function handleRenderError(error: Error, errorInfo: { componentStack: string }) {
  const errorLog = logError(error, {
    errorBoundary: true,
    componentStack: errorInfo.componentStack,
  });

  // Prevent infinite loops in error boundary
  if (error.message.includes('Maximum update depth exceeded')) {
    console.error('Infinite render loop detected - server may need restart');
  }

  return errorLog;
}

/**
 * Validate page structure
 */
export function validatePageStructure(): { valid: boolean; missingElements: string[] } {
  if (typeof document === 'undefined') {
    return { valid: true, missingElements: [] };
  }

  const requiredSections = [
    'header',
    'hero',
    'trust',
    'pain',
    'solution',
    'workflow',
    'pricing',
    'comparison',
    'timeline',
    'faq',
    'risk-reversal',
    'cta',
    'footer',
  ];

  const missingElements = requiredSections.filter(
    (section) => !document.querySelector(`[data-section="${section}"]`) &&
                   !document.querySelector(section)
  );

  return {
    valid: missingElements.length === 0,
    missingElements,
  };
}

/**
 * Monitor for common error patterns
 */
export function monitorErrorPatterns() {
  if (typeof window === 'undefined') return;

  // Detect memory leaks
  let componentMounts = 0;
  let componentUnmounts = 0;

  const originalError = console.error;
  console.error = function (...args: unknown[]) {
    const errorString = String(args[0]);
    
    // Detect common issues
    if (errorString.includes('Maximum update depth')) {
      logError('Infinite render loop detected', { errorType: 'render_loop' });
    }
    
    if (errorString.includes('Cannot find module')) {
      logError('Module not found - likely missing import', { errorType: 'module_not_found' });
    }

    if (errorString.includes('Hydration mismatch')) {
      logError('Server/client render mismatch', { errorType: 'hydration_error' });
    }

    originalError.apply(console, args);
  };

  return { componentMounts, componentUnmounts };
}
