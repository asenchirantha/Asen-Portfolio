# Client Logos Documentation

This document explains how to customize and use client logos in your portfolio.

## Overview

The client logos section displays a scrolling marquee of your client/brand logos at the bottom of the hero section. The logos are animated and interactive.

## File Structure

```
data/
  ├── clients.ts          # Main client data (default gradient style)
  └── clientStyles.ts     # Alternative client logo styles

components/
  └── ClientLogo.tsx      # Reusable client logo component
```

## Using Different Logo Styles

### 1. Default Gradient Style (Current)

The default style uses colorful gradient boxes with client initials:

```tsx
import { clients } from '@/data/clients';
```

**Clients included:**
- TechCorp (TC) - Blue to Cyan
- Innovate Solutions (IS) - Purple to Pink
- Digital Studios (DS) - Orange to Red
- Future Brands (FB) - Green to Emerald
- Creative Agency (CA) - Indigo to Blue
- Global Tech (GT) - Yellow to Orange

### 2. Minimal Style (Like Original Design)

For a more minimal look similar to your original design:

```tsx
import { minimalClients } from '@/data/clientStyles';
```

**In `app/page.tsx`**, replace:
```tsx
import { clients } from '@/data/clients';
```

With:
```tsx
import { minimalClients as clients } from '@/data/clientStyles';
```

### 3. Modern Gradient Style

For more modern, multi-color gradients:

```tsx
import { modernClients as clients } from '@/data/clientStyles';
```

### 4. Tech Company Style

For tech-focused branding:

```tsx
import { techClients as clients } from '@/data/clientStyles';
```

## Customizing Logos

### Add Your Own Clients

Edit `data/clients.ts`:

```typescript
export const clients: Client[] = [
  { 
    name: 'Your Client Name', 
    logo: 'YC',  // 2-3 letter abbreviation
    color: 'from-blue-500 to-cyan-500',  // Tailwind gradient
    description: 'Client description (optional)'
  },
  // Add more clients...
];
```

### Change Logo Style

Edit `components/ClientLogo.tsx` to customize:
- Size: Change `w-24 h-24` to your preferred size
- Shape: Change `rounded-2xl` to `rounded-full` for circles
- Animation: Modify `whileHover` properties
- Colors: Adjust the gradient classes

### Using Image Logos

To use actual image files instead of text:

1. Place your logo images in `public/images/clients/`
2. Update the client data:

```typescript
export const clients: Client[] = [
  { 
    name: 'Client Name',
    logo: '/images/clients/client-logo.png',
    color: 'transparent' // or keep for overlay
  }
];
```

3. Update `ClientLogo.tsx`:

```tsx
<div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center`}>
  {client.logo.startsWith('/') ? (
    <Image src={client.logo} alt={client.name} width={80} height={80} />
  ) : (
    <span className="font-bold text-2xl text-white">{client.logo}</span>
  )}
</div>
```

## Animation Settings

The scrolling animation is configured in `app/page.tsx`:

```tsx
animate={{
  x: ['0%', '-100%']
}}
transition={{
  x: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 15,  // Adjust speed (higher = slower)
    ease: "linear"
  }
}}
```

## Tips

1. **Logo Count**: Use 4-8 logos for best visual balance
2. **Logo Size**: Keep consistent sizes for professional look
3. **Color Scheme**: Match your brand colors or use complementary colors
4. **Performance**: Text logos load faster than images
5. **Accessibility**: Always include client names for screen readers

## Examples

### Example 1: Circle Logos with Borders

```tsx
<div className="w-20 h-20 rounded-full border-4 border-blue-500 flex items-center justify-center">
  <span className="font-bold text-blue-500">{client.logo}</span>
</div>
```

### Example 2: Flat Color Background

```tsx
<div className="w-24 h-24 rounded-lg bg-blue-600 flex items-center justify-center">
  <span className="font-bold text-2xl text-white">{client.logo}</span>
</div>
```

### Example 3: Glass Morphism

```tsx
<div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
  <span className="font-bold text-2xl text-white">{client.logo}</span>
</div>
```

## Need Help?

- Check the current implementation in `app/page.tsx` (search for "Trusted By Leading Brands")
- Look at `components/ClientLogo.tsx` for component details
- Explore `data/clientStyles.ts` for pre-made styles
