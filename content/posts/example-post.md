---
title: "Getting Started with Next.js and Framer Motion"
description: "Learn how to add smooth animations to your Next.js apps"
date: "2025-12-01"
---

# Getting Started with Next.js and Framer Motion

Framer Motion is a powerful animation library for React that makes it easy to add smooth, interactive animations to your applications.

## Installation

```bash
npm install framer-motion
```

## Basic Example

```jsx
import { motion } from 'framer-motion'

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello World
    </motion.div>
  )
}
```

## Next Steps

Explore scroll-triggered animations, gesture controls, and layout animations to create truly engaging experiences.
