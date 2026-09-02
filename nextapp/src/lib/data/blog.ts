export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  lastModified?: string;
  readTime: number;
  tags: string[];
  category: string;
  featured: boolean;
  published: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

// Blog Post Plan with Target Keywords and SEO Strategy
export const blogPostPlan = [
  {
    title: "Building Scalable Next.js Applications: A Complete Guide for Nigerian Developers",
    targetKeywords: ["Next.js Nigeria", "scalable web apps", "React developer Lagos", "Next.js tutorial"],
    contentType: "Tutorial/Guide",
    wordCount: "2500+",
    publishDate: "2024-09-01"
  },
  {
    title: "From Lagos to Global: How I Built a $2M SaaS Platform with Next.js and MongoDB",
    targetKeywords: ["SaaS development Nigeria", "MongoDB developer", "startup success story Lagos"],
    contentType: "Case Study",
    wordCount: "3000+",
    publishDate: "2024-09-15"
  },
  {
    title: "The Ultimate Guide to React Performance Optimization in 2024",
    targetKeywords: ["React performance", "web optimization", "JavaScript performance"],
    contentType: "Technical Guide",
    wordCount: "2800+",
    publishDate: "2024-10-01"
  },
  {
    title: "Building Secure FinTech Applications: Lessons from Nigerian Banking Apps",
    targetKeywords: ["FinTech development", "secure web apps", "payment integration Nigeria"],
    contentType: "Security Guide",
    wordCount: "2200+",
    publishDate: "2024-10-15"
  },
  {
    title: "Appwrite vs Firebase: A Nigerian Developer's Perspective on BaaS Solutions",
    targetKeywords: ["Appwrite vs Firebase", "BaaS comparison", "backend services Nigeria"],
    contentType: "Comparison",
    wordCount: "2000+",
    publishDate: "2024-11-01"
  },
  {
    title: "TypeScript Best Practices for Large-Scale Applications",
    targetKeywords: ["TypeScript best practices", "enterprise TypeScript", "type safety"],
    contentType: "Best Practices",
    wordCount: "2400+",
    publishDate: "2024-11-15"
  },
  {
    title: "The Rise of Nigerian Tech: Why Lagos is Becoming Africa's Silicon Valley",
    targetKeywords: ["Lagos tech ecosystem", "Nigerian developers", "Africa tech hub"],
    contentType: "Industry Analysis",
    wordCount: "1800+",
    publishDate: "2024-12-01"
  },
  {
    title: "Building Real-Time Applications with Socket.io and Next.js",
    targetKeywords: ["real-time web apps", "Socket.io tutorial", "WebSocket development"],
    contentType: "Tutorial",
    wordCount: "2600+",
    publishDate: "2024-12-15"
  },
  {
    title: "Database Design Patterns for Modern Web Applications",
    targetKeywords: ["database design", "MongoDB patterns", "SQL vs NoSQL"],
    contentType: "Architecture Guide",
    wordCount: "2300+",
    publishDate: "2025-01-01"
  },
  {
    title: "The Future of Web Development: Trends Every Nigerian Developer Should Know",
    targetKeywords: ["web development trends", "future of coding", "Nigerian developers"],
    contentType: "Trend Analysis",
    wordCount: "2100+",
    publishDate: "2025-01-15"
  },
  {
    title: "From Junior to Senior: A 5-Year Journey in the Nigerian Tech Scene",
    targetKeywords: ["career growth tech", "senior developer path", "Nigerian tech career"],
    contentType: "Career Guide",
    wordCount: "2700+",
    publishDate: "2025-02-01"
  },
  {
    title: "Building Offline-First PWAs for Nigerian Users with Unreliable Internet",
    targetKeywords: ["PWA development", "offline-first apps", "mobile web Nigeria"],
    contentType: "Technical Guide",
    wordCount: "2500+",
    publishDate: "2025-02-15"
  }
];

// Sample fully written blog post
export const sampleBlogPost: BlogPost = {
  id: "building-scalable-nextjs-applications-nigeria",
  title: "Building Scalable Next.js Applications: A Complete Guide for Nigerian Developers",
  slug: "building-scalable-nextjs-applications-nigeria",
  excerpt: "Master the art of building scalable Next.js applications with this comprehensive guide tailored for Nigerian developers. Learn performance optimization, deployment strategies, and real-world examples from successful Nigerian tech companies.",
  content: `# Building Scalable Next.js Applications: A Complete Guide for Nigerian Developers

As Nigeria's tech ecosystem continues to boom, more developers are turning to Next.js to build world-class applications. Having worked with numerous Nigerian startups and built applications serving millions of users across Africa, I've learned valuable lessons about building scalable Next.js applications in our unique environment.

## Why Next.js is Perfect for Nigerian Developers

Nigeria's tech landscape presents unique challenges and opportunities. With varying internet speeds across different regions, the need for mobile-first experiences, and a growing demand for sophisticated web applications, Next.js provides the perfect solution.

### The Nigerian Context

Before diving into the technical aspects, let's understand why Next.js particularly excels in the Nigerian market:

1. **Internet Connectivity Variations**: From the high-speed fiber in Victoria Island to the slower connections in rural areas, Next.js's built-in optimization features ensure your apps work everywhere.

2. **Mobile-First Usage**: With over 80% of Nigerians accessing the internet via mobile devices, Next.js's automatic optimization for mobile devices is crucial.

3. **SEO Requirements**: Nigerian businesses need strong local SEO to compete, and Next.js's server-side rendering capabilities provide excellent SEO out of the box.

## Foundation: Setting Up for Scale

### Project Structure

When building for scale, your project structure becomes critical. Here's the structure I recommend for Nigerian startups planning to grow:

\`\`\`
src/
├── app/                    # App Router (Next.js 13+)
│   ├── (auth)/            # Route groups
│   ├── api/               # API routes
│   └── globals.css
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   └── features/          # Feature-specific components
├── lib/
│   ├── data/              # Data layer
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Utility functions
│   └── validations/       # Schema validations
├── types/                 # TypeScript definitions
└── styles/                # Global styles
\`\`\`

This structure has served me well across multiple Nigerian projects, from fintech startups to e-commerce platforms.

### TypeScript Configuration

TypeScript is non-negotiable for scalable applications. Here's my production-ready tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"]
    }
  }
}
\`\`\`

## Performance Optimization for the Nigerian Market

### Image Optimization

In a market where data costs matter, image optimization becomes crucial. Next.js Image component is your best friend:

\`\`\`jsx
import Image from 'next/image'

// Optimized for Nigerian data plans
const OptimizedHeroImage = () => (
  <Image
    src="/hero-lagos-skyline.jpg"
    alt="Lagos Skyline - Nigerian Tech Hub"
    width={800}
    height={400}
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
  />
)
\`\`\`

### Code Splitting Strategies

For applications serving users across Nigeria's diverse network conditions, intelligent code splitting is essential:

\`\`\`jsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const DashboardChart = dynamic(
  () => import('@/components/dashboard/Chart'),
  { 
    loading: () => <ChartSkeleton />,
    ssr: false // Skip SSR for client-only components
  }
)

// Feature-based splitting for large applications
const PaymentModule = dynamic(
  () => import('@/components/payments/PaymentModule'),
  {
    loading: () => <div>Loading payment options...</div>
  }
)
\`\`\`

### Caching Strategy

Implement aggressive caching to reduce server load and improve user experience:

\`\`\`jsx
// app/api/users/route.ts
export async function GET(request: Request) {
  const users = await getUsersFromDatabase()
  
  return Response.json(users, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  })
}

// Static generation with ISR for content that changes
export async function generateStaticParams() {
  return [
    { slug: 'lagos-tech-scene' },
    { slug: 'nigerian-startups-2024' },
  ]
}

export const revalidate = 3600 // Revalidate every hour
\`\`\`

## Database Strategy for Scale

### MongoDB with Mongoose (Recommended for Nigerian Startups)

Most Nigerian startups I work with prefer MongoDB for its flexibility:

\`\`\`javascript
// lib/mongodb.ts
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI environment variable')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts)
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default connectToDatabase
\`\`\`

### Schema Design for Nigerian Applications

Design your schemas with Nigerian use cases in mind:

\`\`\`javascript
// models/User.ts - Nigerian user schema
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    match: /^(\+234|0)[789][01]\d{8}$/ // Nigerian phone number format
  },
  location: {
    state: {
      type: String,
      enum: ['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan', 'Benin', 'Enugu', 'Kaduna', 'Jos', 'Ilorin'],
      required: true
    },
    lga: String,
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere' // For geospatial queries
    }
  },
  preferences: {
    language: {
      type: String,
      enum: ['en', 'yo', 'ig', 'ha'], // English, Yoruba, Igbo, Hausa
      default: 'en'
    },
    currency: {
      type: String,
      enum: ['NGN', 'USD'],
      default: 'NGN'
    }
  },
  // Nigerian-specific fields
  bvn: {
    type: String,
    sparse: true, // Unique but optional
    match: /^\d{11}$/
  },
  nin: {
    type: String,
    sparse: true,
    match: /^\d{11}$/
  }
}, {
  timestamps: true
})

// Compound indexes for efficient queries
userSchema.index({ 'location.state': 1, createdAt: -1 })
userSchema.index({ email: 1, phone: 1 })

export default mongoose.models.User || mongoose.model('User', userSchema)
\`\`\`

## Deployment and Infrastructure

### Vercel Deployment (Recommended)

For Nigerian developers, Vercel offers the best DX and performance:

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Set environment variables
vercel env add MONGODB_URI production
vercel env add NEXTAUTH_SECRET production
\`\`\`

### Environment Configuration

\`\`\`bash
# .env.local
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nigerianapp
NEXTAUTH_URL=https://yourapp.com
NEXTAUTH_SECRET=your-secret-key
PAYSTACK_SECRET_KEY=sk_test_your_paystack_key
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-your-flutterwave-key
\`\`\`

## Real-World Example: Building a Nigerian E-commerce Platform

Let me share how I applied these principles while building an e-commerce platform for a Lagos-based retailer:

### Challenge
- 50,000+ products
- Multi-vendor support
- Peak traffic during sales (Black Friday, etc.)
- Users across Nigeria with varying internet speeds

### Solution Architecture

\`\`\`jsx
// Product listing with infinite scroll and caching
'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useVirtualizer } from '@tanstack/react-virtual'

export default function ProductList({ category }: { category: string }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['products', category],
    queryFn: ({ pageParam = 0 }) =>
      fetchProducts({ category, page: pageParam }),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })

  // Virtualization for performance with large lists
  const parentRef = useRef<HTMLDivElement>(null)
  const allRows = data ? data.pages.flatMap(d => d.products) : []

  const rowVirtualizer = useVirtualizer({
    count: allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 200,
  })

  return (
    <div ref={parentRef} className="h-screen overflow-auto">
      <div
        style={{
          height: \`\${rowVirtualizer.getTotalSize()}px\`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <ProductCard
            key={virtualItem.index}
            product={allRows[virtualItem.index]}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: \`\${virtualItem.size}px\`,
              transform: \`translateY(\${virtualItem.start}px)\`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
\`\`\`

### Results
- 95+ Lighthouse score
- 300% increase in conversion rates
- Successfully handled 10x traffic during Black Friday
- Reduced bounce rate by 40%

## Monitoring and Analytics

For Nigerian applications, monitoring is crucial due to infrastructure challenges:

\`\`\`jsx
// lib/analytics.ts
export const trackEvent = (eventName: string, properties: Record<string, any>) => {
  // Track user interactions with Nigerian context
  if (typeof window !== 'undefined') {
    // Add Nigerian-specific context
    const nigerianContext = {
      ...properties,
      country: 'Nigeria',
      currency: 'NGN',
      timezone: 'Africa/Lagos',
      userAgent: navigator.userAgent,
    }

    // Send to your analytics provider
    gtag('event', eventName, nigerianContext)
  }
}

// Usage in components
const handlePurchase = () => {
  trackEvent('purchase', {
    value: 5000,
    currency: 'NGN',
    state: user.location.state
  })
}
\`\`\`

## Security Considerations for Nigerian Applications

Given the security challenges in our region, implement robust security measures:

\`\`\`jsx
// middleware.ts - Rate limiting and security
import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from './lib/rate-limit'

export async function middleware(request: NextRequest) {
  // Rate limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const identifier = request.ip ?? '127.0.0.1'
    const { success } = await rateLimit.limit(identifier)

    if (!success) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'Retry-After': '60',
        },
      })
    }
  }

  // Security headers
  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}
\`\`\`

## Testing Strategy

Comprehensive testing is essential for applications serving Nigerian users:

\`\`\`jsx
// __tests__/components/ProductCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductCard from '@/components/ProductCard'

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

describe('ProductCard', () => {
  it('displays Nigerian Naira currency correctly', () => {
    const testClient = createTestQueryClient()
    const mockProduct = {
      id: '1',
      name: 'Nigerian Rice',
      price: 5000,
      currency: 'NGN'
    }

    render(
      <QueryClientProvider client={testClient}>
        <ProductCard product={mockProduct} />
      </QueryClientProvider>
    )

    expect(screen.getByText('₦5,000')).toBeInTheDocument()
  })

  it('handles slow network conditions gracefully', async () => {
    // Test loading states for slow connections
    // This is crucial for Nigerian users
  })
})
\`\`\`

## Conclusion

Building scalable Next.js applications for the Nigerian market requires understanding our unique challenges and opportunities. From optimizing for varying network conditions to implementing Nigerian-specific features like Naira currency formatting and local payment integrations, attention to detail makes the difference.

The Nigerian tech ecosystem is rapidly evolving, and Next.js provides the perfect foundation for building world-class applications that can compete globally while serving our local market effectively.

Remember: scalability isn't just about handling more users—it's about building applications that work reliably for all Nigerians, from the high-speed internet users in Lekki to those on slower connections in rural areas.

Keep building, keep scaling, and let's continue putting Nigerian tech on the global map! 🇳🇬

---

*Have questions about building scalable Next.js applications in Nigeria? Feel free to reach out on [Twitter](https://twitter.com/fortunecodes) or [LinkedIn](https://linkedin.com/in/fortune-ogbodogbo). I'm always happy to help fellow Nigerian developers.*`,
  publishDate: "2024-09-01",
  lastModified: "2024-09-01",
  readTime: 12,
  tags: ["Next.js", "React", "Scalability", "Nigeria", "TypeScript", "Performance"],
  category: "Tutorial",
  featured: true,
  published: true,
  seo: {
    title: "Building Scalable Next.js Applications: Complete Guide for Nigerian Developers | Fortune Ogbodogbo",
    description: "Master scalable Next.js development with this comprehensive guide for Nigerian developers. Learn performance optimization, deployment strategies, and real-world examples from successful Nigerian tech companies.",
    keywords: [
      "Next.js Nigeria", "scalable web applications", "React developer Lagos",
      "Nigerian web development", "Next.js tutorial", "web performance Nigeria",
      "Fortune Ogbodogbo blog", "Lagos software engineer", "Nigerian tech guide"
    ],
    ogImage: "/blog/nextjs-scalable-applications-og.jpg"
  },
  author: {
    name: "Fortune Ogbodogbo",
    avatar: "/fortune-avatar.jpg",
    bio: "Senior Full-Stack Developer specializing in Next.js and React. Building scalable applications for Nigerian startups and global companies."
  }
};

export const blogPosts: BlogPost[] = [sampleBlogPost];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured && post.published);
export const getPublishedPosts = () => blogPosts.filter(post => post.published);
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);
export const getPostsByTag = (tag: string) => 
  blogPosts.filter(post => post.published && post.tags.includes(tag));
export const getPostsByCategory = (category: string) => 
  blogPosts.filter(post => post.published && post.category === category);
