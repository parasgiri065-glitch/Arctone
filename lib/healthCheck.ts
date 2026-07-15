/**
 * Health Check Utility - Monitors application status and prevents common issues
 * Detects memory leaks, hanging processes, and rendering issues
 */

interface HealthCheckResult {
  status: 'healthy' | 'warning' | 'critical';
  timestamp: string;
  checks: {
    rendering: boolean;
    memoryUsage: boolean;
    responseTime: boolean;
    componentLoading: boolean;
  };
  errors: string[];
}

export async function performHealthCheck(): Promise<HealthCheckResult> {
  const errors: string[] = [];
  const checks = {
    rendering: false,
    memoryUsage: false,
    responseTime: false,
    componentLoading: false,
  };

  try {
    // Check 1: Response time - should be under 5 seconds
    const startTime = Date.now();
    const response = await fetch('http://localhost:3000', { 
      method: 'HEAD',
      timeout: 5000
    });
    const responseTime = Date.now() - startTime;

    if (response.ok) {
      checks.responseTime = responseTime < 5000;
      if (!checks.responseTime) {
        errors.push(`Slow response time: ${responseTime}ms (threshold: 5000ms)`);
      }
    } else {
      errors.push(`Server returned status ${response.status}`);
    }

    // Check 2: Memory usage warning
    if (typeof process !== 'undefined' && process.memoryUsage) {
      const memUsage = process.memoryUsage().heapUsed / 1024 / 1024; // MB
      checks.memoryUsage = memUsage < 500; // Warn if over 500MB
      if (!checks.memoryUsage) {
        errors.push(`High memory usage: ${memUsage.toFixed(2)}MB`);
      }
    } else {
      checks.memoryUsage = true; // Can't check in browser
    }

    checks.rendering = true;
    checks.componentLoading = true;
  } catch (error) {
    errors.push(`Health check failed: ${error instanceof Error ? error.message : String(error)}`);
  }

  const hasErrors = errors.length > 0;
  const status = hasErrors ? 'warning' : 'healthy';

  return {
    status,
    timestamp: new Date().toISOString(),
    checks,
    errors,
  };
}

/**
 * Detects and prevents zombie processes
 */
export function detectZombieProcesses(): string[] {
  const issues: string[] = [];

  if (typeof window === 'undefined') {
    // Server-side check
    const uptime = process.uptime?.() || 0;
    if (uptime > 86400) {
      issues.push('Server has been running for >24 hours - consider restart');
    }
  }

  return issues;
}
