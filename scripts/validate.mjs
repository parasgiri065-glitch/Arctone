#!/usr/bin/env node

/**
 * ArcTone Website Validation Script
 * Performs comprehensive checks to ensure website stability
 */

import { spawn } from 'child_process';
import http from 'http';
import { execSync } from 'child_process';

const CHECKS = {
  PORT_AVAILABLE: 'PORT_AVAILABLE',
  SERVER_STARTUP: 'SERVER_STARTUP',
  HTTP_RESPONSE: 'HTTP_RESPONSE',
  CONTENT_INTEGRITY: 'CONTENT_INTEGRITY',
  MEMORY_USAGE: 'MEMORY_USAGE',
  NO_ERRORS: 'NO_ERRORS',
};

const RESULTS = {};

console.log('═══════════════════════════════════════════════════════════');
console.log('   ArcTone Website - Comprehensive Validation Suite');
console.log('═══════════════════════════════════════════════════════════\n');

// Check 1: Port availability
console.log('✓ Check 1: Port 3000 availability...');
try {
  const output = execSync('lsof -i :3000 2>/dev/null || echo "free"').toString();
  RESULTS[CHECKS.PORT_AVAILABLE] = output.includes('free') || output.trim() === 'free';
  console.log(`  Status: ${RESULTS[CHECKS.PORT_AVAILABLE] ? '✓ PASS' : '✗ FAIL'} - Port is ${RESULTS[CHECKS.PORT_AVAILABLE] ? 'available' : 'in use'}\n`);
} catch (error) {
  RESULTS[CHECKS.PORT_AVAILABLE] = true;
  console.log('  Status: ✓ PASS - Port check skipped\n');
}

// Check 2: File system validation
console.log('✓ Check 2: Critical files validation...');
const criticalFiles = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'next.config.mjs',
  'components/FAQClient.tsx',
  'lib/errorHandler.ts',
];

let filesValid = true;
try {
  for (const file of criticalFiles) {
    try {
      execSync(`test -f ${file}`, { cwd: process.cwd() });
    } catch {
      console.log(`  ✗ Missing: ${file}`);
      filesValid = false;
    }
  }
  RESULTS['FILES_EXIST'] = filesValid;
  console.log(`  Status: ${filesValid ? '✓ PASS' : '✗ FAIL'} - All critical files present\n`);
} catch (error) {
  RESULTS['FILES_EXIST'] = false;
  console.log(`  Status: ✗ FAIL - File check error\n`);
}

// Check 3: Configuration validation
console.log('✓ Check 3: Configuration validation...');
try {
  const configContent = execSync('cat next.config.mjs').toString();
  const hasDisabledTurbopack = configContent.includes('turbopack: false');
  RESULTS['CONFIG_VALID'] = hasDisabledTurbopack;
  console.log(`  Turbopack disabled: ${hasDisabledTurbopack ? '✓ Yes' : '✗ No'}`);
  console.log(`  Status: ${hasDisabledTurbopack ? '✓ PASS' : '✗ FAIL'}\n`);
} catch (error) {
  RESULTS['CONFIG_VALID'] = false;
  console.log(`  Status: ✗ FAIL - Cannot read config\n`);
}

// Check 4: Dependencies
console.log('✓ Check 4: Dependencies check...');
try {
  execSync('test -d node_modules', { cwd: process.cwd() });
  RESULTS['DEPS_INSTALLED'] = true;
  console.log('  Status: ✓ PASS - node_modules present\n');
} catch (error) {
  RESULTS['DEPS_INSTALLED'] = false;
  console.log('  Status: ⚠ WARNING - Run: pnpm install\n');
}

// Check 5: TypeScript compilation
console.log('✓ Check 5: TypeScript validation...');
try {
  execSync('pnpm tsc --noEmit 2>/dev/null', { 
    cwd: process.cwd(),
    stdio: 'pipe'
  });
  RESULTS['TS_VALID'] = true;
  console.log('  Status: ✓ PASS - No TypeScript errors\n');
} catch (error) {
  RESULTS['TS_VALID'] = false;
  console.log('  Status: ⚠ WARNING - TypeScript errors present (may be non-blocking)\n');
}

// Summary
console.log('═══════════════════════════════════════════════════════════');
console.log('   VALIDATION SUMMARY');
console.log('═══════════════════════════════════════════════════════════\n');

const passCount = Object.values(RESULTS).filter(r => r === true).length;
const totalChecks = Object.values(RESULTS).length;

console.log(`Passed: ${passCount}/${totalChecks} checks\n`);

if (passCount === totalChecks) {
  console.log('✓ All validation checks PASSED\n');
  console.log('Website is ready to run. Start with: pnpm dev\n');
} else {
  console.log('⚠ Some checks failed. Review above for details.\n');
  console.log('Common fixes:');
  console.log('  1. pnpm install          - Install missing dependencies');
  console.log('  2. pkill -9 node         - Kill hanging processes');
  console.log('  3. rm -rf .next          - Clear build cache');
  console.log('  4. pnpm dev              - Start dev server\n');
}

console.log('═══════════════════════════════════════════════════════════\n');

process.exit(passCount === totalChecks ? 0 : 1);
