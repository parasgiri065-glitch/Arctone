# ArcTone Website - Architecture & Technical Documentation

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx              # Main page (server component, no 'use client')
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles (minimal, <50 lines)
├── components/
│   ├── FAQClient.tsx         # FAQ accordion (client component only)
│   └── ui/                   # shadcn/ui components (auto-generated)
├── lib/
│   ├── errorHandler.ts       # Global error handling
│   ├── healthCheck.ts        # Health monitoring
│   └── utils.ts              # Utility functions
├── scripts/
│   └── validate.mjs          # Validation script
├── next.config.mjs           # Next.js configuration
├── TROUBLESHOOTING.md        # Troubleshooting guide
├── ARCHITECTURE.md           # This file
└── package.json
```

## Design Decisions

### 1. Turbopack Disabled
**Why**: Large JSX files cause infinite loops in Turbopack (dev compiler)
**Impact**: Dev server uses webpack instead (more stable)
**Trade-off**: Slightly slower hot reload, but no hanging

### 2. Server Components Preferred
**Why**: Reduces client-side bundle and hydration errors
**Pattern**: 
- page.tsx = Server component (default)
- FAQClient.tsx = Client component (only for interactivity)

### 3. Minimal globals.css
**Why**: Complex CSS causes Turbopack to hang
**Pattern**: 
- Keep globals.css under 50 lines
- Use Tailwind for most styling
- Inline styles for dynamic CSS

### 4. Single-page Architecture
**Why**: No complex routing, all content on homepage
**Benefit**: Faster load, fewer potential error points

## Key Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| Next.js | Web framework | 16.2.0 |
| React | UI library | 19.2.4 |
| Tailwind CSS | Styling | 4.2.0 |
| TypeScript | Type safety | 5.7.3 |
| shadcn/ui | Component library | Latest |

## Component Breakdown

### Page.tsx (Server Component)
- All 13 sections rendered
- No client-side state
- Lightweight (~280 lines)
- Links handled via `<a>` tags

### FAQClient.tsx (Client Component)
- Single stateful component
- Manages accordion expand/collapse
- Separate file prevents page.tsx bloat
- Imports with: `import FAQClient from '@/components/FAQClient'`

### Utilities
- `errorHandler.ts` - Error logging, validation
- `healthCheck.ts` - Performance monitoring
- `utils.ts` - Shared functions

## Performance Optimizations

### Bundle Size
- Webpack used (not Turbopack)
- Minimal CSS in globals
- No unused dependencies
- Tree-shaking enabled

### Rendering
- Server components (page.tsx)
- Client components only for interactivity (FAQ)
- No hydration mismatches
- Optimized image loading

### Network
- WhatsApp links pre-built
- No external API calls
- All content static
- Single round-trip to load page

## Error Prevention

### Configuration Level
```javascript
// next.config.mjs
experimental: {
  turbopack: false,  // Prevents hanging
}
reactStrictMode: true,  // Catches issues
swcMinify: true,        // Stable minification
```

### Code Level
- Server components prevent client errors
- FAQClient properly separated
- No circular imports
- Type safety with TypeScript

### Runtime Level
- Health check monitoring
- Error boundary patterns
- Graceful error handling
- Resource limits

## Common Issues & Fixes

### Issue: Server doesn't respond
**Root Cause**: Zombie process holding port
**Fix**: 
```bash
pkill -9 node
pnpm dev
```

### Issue: CSS not loading
**Root Cause**: globals.css syntax error
**Fix**: Keep under 50 lines, avoid complex rules

### Issue: FAQ not interactive
**Root Cause**: Missing FAQClient import
**Fix**: Ensure import in page.tsx exists

### Issue: Pages load slowly
**Root Cause**: Memory leak or old process
**Fix**: Restart every 24 hours

## Scalability Considerations

### When to Refactor
1. **If adding >100 lines to page.tsx**
   - Extract into separate section component
   - Keep page.tsx clean

2. **If adding more interactive elements**
   - Follow FAQClient pattern
   - Separate into `ComponentClient.tsx`

3. **If CSS grows beyond 50 lines**
   - Create `styles/custom.css`
   - Import in globals.css

### Future Enhancements
- Add blog section (static generation)
- Add testimonials carousel (client component)
- Add form submission (API route)
- Add analytics tracking

## Security

### Current Measures
- No sensitive data exposure
- CORS headers configured
- Content Security Policy ready
- XSS prevention via React

### WhatsApp Integration
- No authentication needed
- Pre-built URLs safe
- No user data collection
- Privacy-friendly approach

## Deployment Checklist

Before deploying to production:

1. **Build Test**
   ```bash
   pnpm build
   ```

2. **Type Check**
   ```bash
   pnpm tsc --noEmit
   ```

3. **Run Validation**
   ```bash
   node scripts/validate.mjs
   ```

4. **Test All CTAs**
   - Click every "WhatsApp Now" button
   - Verify phone number 7061781904
   - Check pre-filled message format

5. **Responsive Test**
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)

6. **Performance Check**
   - Page load < 3 seconds
   - Lighthouse score > 80
   - No console errors

## Monitoring & Maintenance

### Daily
- Check server health
- Verify no zombie processes
- Monitor memory usage

### Weekly
- Test all links
- Check console for errors
- Review performance metrics

### Monthly
- Full validation run
- Update dependencies (if needed)
- Test deployment pipeline

## Useful Commands

```bash
# Development
pnpm dev                 # Start dev server
pnpm build              # Build for production
pnpm start              # Run production server

# Validation
node scripts/validate.mjs    # Run all checks
pnpm tsc --noEmit          # Type check

# Maintenance
pkill -9 node           # Kill all node processes
rm -rf .next            # Clear build cache
lsof -i :3000          # Check port usage

# Monitoring
ps aux | grep next      # Check process
top -p $(pgrep -f "next dev")  # Monitor resources
curl http://localhost:3000     # Test response
```

## Support & Troubleshooting

See `TROUBLESHOOTING.md` for:
- Common issues & solutions
- Emergency procedures
- Performance benchmarks
- Prevention checklist

## Version History

- **v1.0** - Initial launch with 13 sections
- **Fixed**: Turbopack hanging issue
- **Fixed**: Zombie process memory leak
- **Fixed**: CSS configuration errors
