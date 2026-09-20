export interface CategoryConfig {
  slug: string;
  name: string;
  shortDescription: string;
  editorialDeck: string;
  subcategories: string[];
  isSpecialty?: boolean;
  featuredOrder: number;
  badge?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isSpecialty?: boolean;
  description?: string;
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  locale: string;
  editorialPillar: string;
  defaultAuthor: {
    name: string;
    role: string;
    bio: string;
  };
  navigation: {
    primary: NavigationItem[];
    secondary: NavigationItem[];
    footerExplore: NavigationItem[];
    footerCompany: NavigationItem[];
  };
  categories: Record<string, CategoryConfig>;
  socialLinks: {
    pinterest: string;
    instagram: string;
    rss: string;
    email: string;
  };
  newsletter: {
    headline: string;
    description: string;
    provider: 'local' | 'substack' | 'convertkit' | 'custom';
    endpoint: string;
    buttonText: string;
    placeholder: string;
  };
  ads: {
    enabled: boolean;
    provider: 'none' | 'custom';
  };
  analytics: {
    enabled: boolean;
    provider: 'none' | 'plausible' | 'ga4';
  };
}

export const siteConfig: SiteConfig = {
  siteName: 'The House Chapter',
  tagline: 'Ideas for a home well lived.',
  description: 'A thoughtful home-decor and interiors publication covering beautiful, practical, attainable ideas for every corner of home — with focused authority in entryways and hallways.',
  siteUrl: 'https://thehousechapter.com',
  locale: 'en_US',
  editorialPillar: 'Entryways & Hallways',
  defaultAuthor: {
    name: 'The House Chapter Editorial',
    role: 'Interiors & Styling Editors',
    bio: 'Curated by our team of interior designers, home organizers, and editorial stylists dedicated to practical, beautiful living.',
  },
  navigation: {
    primary: [
      { label: 'Home Decor', href: '/home-decor/' },
      { label: 'Rooms', href: '/rooms/' },
      { label: 'Furniture & Styling', href: '/furniture-styling/' },
      { label: 'Organization', href: '/organization-storage/' },
      { label: 'Small Spaces', href: '/small-space-living/' },
      { label: 'Apartments', href: '/apartments/' },
      { label: 'Entryways & Hallways', href: '/entryways-hallways/', isSpecialty: true },
    ],
    secondary: [
      { label: 'Awkward & Underused Spaces', href: '/awkward-spaces/' },
      { label: 'Outdoor & Garden', href: '/outdoor-garden/' },
      { label: 'Seasonal Home', href: '/seasonal-home/' },
    ],
    footerExplore: [
      { label: 'Home Decor', href: '/home-decor/' },
      { label: 'Rooms', href: '/rooms/' },
      { label: 'Organization & Storage', href: '/organization-storage/' },
      { label: 'Small-Space Living', href: '/small-space-living/' },
      { label: 'Apartments', href: '/apartments/' },
      { label: 'Furniture & Styling', href: '/furniture-styling/' },
      { label: 'Entryways & Hallways', href: '/entryways-hallways/', isSpecialty: true },
      { label: 'Awkward & Underused Spaces', href: '/awkward-spaces/' },
      { label: 'Outdoor & Garden', href: '/outdoor-garden/' },
      { label: 'Seasonal Home', href: '/seasonal-home/' },
    ],
    footerCompany: [
      { label: 'About Us', href: '/about/' },
      { label: 'Contact & Editorial', href: '/contact/' },
      { label: 'Search All Chapters', href: '/search/' },
      { label: 'RSS Feed', href: '/rss.xml' },
    ],
  },
  categories: {
    'home-decor': {
      slug: 'home-decor',
      name: 'Home Decor',
      shortDescription: 'Broad decorating inspiration, styling touches, and color palettes.',
      editorialDeck: 'Decorating is how a house becomes personal. Explore warm color stories, layered textures, and decorative accents that bring depth and warmth to every living space.',
      subcategories: ['Decorating Ideas', 'Styling', 'Color Ideas', 'Decor Details', 'Decorative Accents', 'Home Refreshes'],
      featuredOrder: 1,
    },
    'rooms': {
      slug: 'rooms',
      name: 'Rooms',
      shortDescription: 'Room-by-room inspiration for living, resting, and dining.',
      editorialDeck: 'From peaceful bedrooms to hardworking kitchens and gathering spaces, discover ideas tailored to how each individual room functions and feels.',
      subcategories: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Dining Room', 'Home Office', 'Nursery', 'Other Rooms'],
      featuredOrder: 2,
    },
    'furniture-styling': {
      slug: 'furniture-styling',
      name: 'Furniture & Styling',
      shortDescription: 'Selecting, placing, and styling core furniture pieces.',
      editorialDeck: 'Thoughtfully chosen furniture anchors a room. Learn how to place console tables, balance seating, arrange coffee tables, and select pieces that offer both utility and sculptural elegance.',
      subcategories: ['Console Tables', 'Benches', 'Shelving & Bookcases', 'Coffee & Side Tables', 'Multifunctional Furniture', 'Placement Guides'],
      featuredOrder: 3,
    },
    'organization-storage': {
      slug: 'organization-storage',
      name: 'Organization & Storage',
      shortDescription: 'Orderly systems, functional storage, and calm decluttering.',
      editorialDeck: 'Real life requires real storage. We share clever closet systems, shoe organization, hidden storage, and decluttering methods that keep daily clutter out of sight.',
      subcategories: ['Home Organization', 'Closet Storage', 'Shoe Storage', 'Functional Storage', 'Decluttering Systems', 'Pantry & Cabinet'],
      featuredOrder: 4,
    },
    'small-space-living': {
      slug: 'small-space-living',
      name: 'Small-Space Living',
      shortDescription: 'Ingenious layouts, smart scaling, and big style for modest footprints.',
      editorialDeck: 'A small footprint doesn’t mean compromised living. Discover spatial tricks, double-duty furniture, and architectural illusions that make compact homes feel serene and generous.',
      subcategories: ['Small Apartments', 'Small Rooms', 'Space-Saving Ideas', 'Compact Layouts', 'Multifunctional Living', 'Vertical Storage'],
      featuredOrder: 5,
    },
    'apartments': {
      slug: 'apartments',
      name: 'Apartments',
      shortDescription: 'Rental-friendly ideas, studio layouts, and apartment decor.',
      editorialDeck: 'Whether making a rental feel permanent or maximizing an open studio layout, here are non-damaging upgrades, smart partitions, and space-conscious decorating ideas.',
      subcategories: ['Rental Friendly', 'Studio Living', 'Apartment Layouts', 'Renter Storage', 'Lighting Solutions', 'Balcony & Entry'],
      featuredOrder: 6,
    },
    'entryways-hallways': {
      slug: 'entryways-hallways',
      name: 'Entryways & Hallways',
      shortDescription: 'The Specialty Chapter: transitional spaces that set the tone of home.',
      editorialDeck: 'Entryways and hallways are some of the hardest-working spaces in a home — and the easiest to overlook. Discover ideas for making these vital thresholds welcoming, organized, and beautiful.',
      subcategories: [
        'Small Entryways',
        'Apartment Entryways',
        'Entryway Storage',
        'Entryway Shoe Storage',
        'Entryway Benches',
        'Entryway Tables & Consoles',
        'Entryway Mirrors',
        'Entryway Lighting',
        'Entryway Rugs',
        'Hallway Decor',
        'Narrow Hallways',
        'No-Entryway Solutions',
      ],
      isSpecialty: true,
      featuredOrder: 7,
      badge: 'Editorial Pillar',
    },
    'awkward-spaces': {
      slug: 'awkward-spaces',
      name: 'Awkward & Underused Spaces',
      shortDescription: 'Transforming dead corners, under-stair nooks, and irregular alcoves.',
      editorialDeck: 'Every home has difficult corners: the narrow recess, the dead zone beneath stairs, or blank walls that seem unusable. We turn architectural quirks into functional moments.',
      subcategories: ['Awkward Corners', 'Narrow Recesses', 'Under-Stairs', 'Unused Walls', 'Nook Conversions', 'Window Wells'],
      featuredOrder: 8,
    },
    'outdoor-garden': {
      slug: 'outdoor-garden',
      name: 'Outdoor & Garden',
      shortDescription: 'Balconies, small patios, potted greenery, and open-air retreats.',
      editorialDeck: 'Extend living beyond four walls. Thoughtful styling for apartment balconies, cozy urban patios, container herb gardens, and intimate al fresco settings.',
      subcategories: ['Patios', 'Balconies', 'Small Gardens', 'Container Gardening', 'Outdoor Lighting', 'Outdoor Seating'],
      featuredOrder: 9,
    },
    'seasonal-home': {
      slug: 'seasonal-home',
      name: 'Seasonal Home',
      shortDescription: 'Natural, graceful shifts for autumn, winter, spring, and summer.',
      editorialDeck: 'Celebrate the rhythm of the year through subtle textural updates, seasonal foliage, cozy lighting transitions, and understated holiday accents.',
      subcategories: ['Fall Decorating', 'Holiday & Winter', 'Spring Refresh', 'Summer Living', 'Seasonal Tablescapes', 'Seasonal Entryways'],
      featuredOrder: 10,
    },
  },
  socialLinks: {
    pinterest: 'https://pinterest.com/thehousechapter',
    instagram: 'https://instagram.com/thehousechapter',
    rss: '/rss.xml',
    email: 'hello@thehousechapter.com',
  },
  newsletter: {
    headline: 'A little inspiration for your next chapter at home.',
    description: 'Get thoughtfully curated decorating ideas, practical storage solutions, and entryway transformations delivered quietly to your inbox.',
    provider: 'local',
    endpoint: '/api/newsletter',
    buttonText: 'Subscribe',
    placeholder: 'Enter your email address...',
  },
  ads: {
    enabled: false,
    provider: 'none',
  },
  analytics: {
    enabled: false,
    provider: 'none',
  },
};
