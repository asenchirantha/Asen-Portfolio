# Quick Reference: Client Logos

## Current Setup

Your portfolio now displays **6 professional client logos** with gradient backgrounds in a scrolling marquee.

---

## Preview the Changes

Run your development server:
```bash
npm run dev
```

Then visit: `http://localhost:3000`

The client logos appear at the bottom of the hero section with "Trusted By Leading Brands" heading.

---

## Switch Between Styles

### Style 1: Current (Colorful Gradients) ✅
**Already Active**

Shows: TechCorp, Innovate Solutions, Digital Studios, Future Brands, Creative Agency, Global Tech

### Style 2: Minimal (Original Design Style)
```tsx
// In app/page.tsx, line 10
// Change:
import { clients } from '@/data/clients';

// To:
import { minimalClients as clients } from '@/data/clientStyles';
```

Shows: ESU, BI, ∞, BOOST (like your original design)

### Style 3: Modern Gradients
```tsx
import { modernClients as clients } from '@/data/clientStyles';
```

Shows: Quantum Labs, Nexus Digital, Velocity Inc, Apex Studios, Zenith Corp, Pulse Media

### Style 4: Tech Companies
```tsx
import { techClients as clients } from '@/data/clientStyles';
```

Shows: CloudSync, DataFlow, CodeBase, NetCore, ByteWorks, LogicLabs

---

## Add Your Real Clients

### Option 1: Quick Text Edit
Edit `data/clients.ts`:

```typescript
export const clients: Client[] = [
  { 
    name: 'Apple',          // Full name
    logo: 'AP',            // 2-3 letters
    color: 'from-gray-800 to-gray-900',  // Tailwind gradient
    description: 'Technology giant'      // Optional
  },
  { 
    name: 'Google', 
    logo: 'GO', 
    color: 'from-blue-600 to-green-500'
  },
  // Add more...
];
```

### Option 2: Using Real Logo Images
1. **Add images** to `public/images/clients/`:
   ```
   public/images/clients/
     ├── apple-logo.png
     ├── google-logo.png
     └── microsoft-logo.png
   ```

2. **Update clients data**:
   ```typescript
   { 
     name: 'Apple',
     logo: '/images/clients/apple-logo.png',  // Image path
     color: 'transparent'
   }
   ```

3. **Update ClientLogo component** (`components/ClientLogo.tsx`):
   ```tsx
   import Image from 'next/image';
   
   // In the render, replace line 15:
   {client.logo.startsWith('/') ? (
     <Image 
       src={client.logo} 
       alt={client.name} 
       width={60} 
       height={60}
       className="object-contain"
     />
   ) : (
     <span className="font-bold text-2xl text-white">{client.logo}</span>
   )}
   ```

---

## Customize Appearance

### Change Logo Size
In `components/ClientLogo.tsx`, line 14:
```tsx
// Change from:
className="w-24 h-24 ..."

// To:
className="w-32 h-32 ..."  // Larger
// or
className="w-16 h-16 ..."  // Smaller
```

### Make Logos Circular
In `components/ClientLogo.tsx`, line 14:
```tsx
// Change:
rounded-2xl

// To:
rounded-full
```

### Adjust Scroll Speed
In `app/page.tsx`, around line 265:
```tsx
transition={{
  x: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 15,  // Change this: 10=faster, 20=slower
    ease: "linear"
  }
}}
```

### Change Gap Between Logos
In `app/page.tsx`, line 259:
```tsx
className="flex items-center gap-16"  // Change gap-16 to gap-8 (smaller) or gap-24 (larger)
```

---

## Color Schemes

### Tailwind Gradient Colors You Can Use:

**Blue Tones:**
- `from-blue-400 to-blue-600`
- `from-sky-500 to-blue-500`
- `from-cyan-500 to-blue-600`

**Purple/Pink:**
- `from-purple-500 to-pink-500`
- `from-violet-500 to-fuchsia-600`
- `from-indigo-500 to-purple-600`

**Green:**
- `from-green-400 to-emerald-600`
- `from-lime-500 to-green-600`
- `from-teal-500 to-cyan-600`

**Warm Colors:**
- `from-orange-500 to-red-500`
- `from-yellow-500 to-orange-600`
- `from-red-500 to-pink-600`

**Monochrome:**
- `from-gray-700 to-gray-900`
- `from-slate-600 to-slate-800`

---

## Troubleshooting

### Logos not showing?
- Check console for errors
- Verify import path in `app/page.tsx`
- Ensure `clients` array has items

### Animation not smooth?
- Increase array duplication: `[...clients, ...clients, ...clients]`
- Adjust `duration` in transition settings

### Hover effect not working?
- Check `ClientLogo.tsx` has `whileHover` prop
- Ensure framer-motion is installed

### Images not displaying?
- Verify image path starts with `/`
- Check images exist in `public/` folder
- Use correct file extension (.png, .jpg, .svg)

---

## Files You Can Edit

✏️ **To change logos:** `data/clients.ts`  
✏️ **To customize style:** `components/ClientLogo.tsx`  
✏️ **To adjust animation:** `app/page.tsx` (line 250-275)  
📖 **For detailed help:** `docs/CLIENT_LOGOS.md`

---

## Quick Test

After making changes:
1. Save all files
2. Check browser (should auto-reload)
3. Scroll to hero section
4. Hover over logos to see animations

**Happy customizing! 🎨**
