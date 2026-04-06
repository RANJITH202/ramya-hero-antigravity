// Site Configuration for Ramya Creations
// Premium handmade silk thread jewelry brand

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Ramya Creations | Handmade Silk Thread Jewelry",
  siteDescription: "Discover Ramya Creations' artisanal silk-thread jewelry. Handcrafted bangles, earrings, and necklaces blending Indian tradition with modern elegance.",
};

// Hero Section
export interface HeroConfig {
  brandName: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  heroImage: string;
  heroImageAlt: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  brandName: "Ramya Creations",
  headline: "Handcrafted Silk-Thread Jewelry",
  subheadline: "Where Tradition Meets Modern Grace",
  description: "Each piece is lovingly handmade, weaving together centuries of Indian craftsmanship with contemporary design. Lightweight, vibrant, and uniquely yours.",
  ctaText: "Explore Collection",
  ctaHref: "#collection",
  secondaryCtaText: "View Craft",
  secondaryCtaHref: "#craft",
  heroImage: import.meta.env.BASE_URL + "hero-jewelry.jpg",
  heroImageAlt: "Ramya Creations handmade silk-thread bangles and earrings in rose pink and gold",
  navLinks: [
    { label: "Collection", href: "#collection" },
    { label: "Our Story", href: "#story" },
    { label: "Craft", href: "#craft" },
    { label: "Contact", href: "#contact" },
  ],
};

// Intro Grid Section - Disabled for hero-only focus
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Rooted in",
  titleLine2: "Tradition",
  description: "Ramya Creations was born out of a profound love for Indian artistry. Our journey began with a single spool of silk thread and a passion to reinvent traditional jewelry. Today, we empower local women artisans who pour their heart and soul into every intricate wrap, knot, and embellishment. We believe jewelry isn't just an accessory—it's a story of heritage, patience, and art.",
  portfolioImages: [
    { src: import.meta.env.BASE_URL + "silk_crafting.png", alt: "Artisan hands crafting jewelry" },
    { src: import.meta.env.BASE_URL + "hero-jewelry.jpg", alt: "Pink silk thread jewelry" },
  ],
  accentText: "Est. 2024",
};

// Featured Projects Section - Disabled for hero-only focus
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Curated Elegance",
  titleRegular: "Explore Our",
  titleItalic: "Signature Collection",
  viewAllText: "Shop All Items",
  viewAllHref: "#contact",
  viewProjectText: "View Details",
  projects: [
    {
      id: 1,
      title: "Royal Ruby Bangles",
      category: "Bangles",
      year: "2024",
      image: import.meta.env.BASE_URL + "silk_bangles.png",
      description: "A breathtaking stack of handcrafted silk bangles. The deep ruby threads are meticulously wrapped and adorned with golden beadwork, creating a rich focal point for festive wear and bridal trousseaus.",
    },
    {
      id: 2,
      title: "Emerald Jhumkas",
      category: "Earrings",
      year: "2024",
      image: import.meta.env.BASE_URL + "silk_earrings.png",
      description: "Timeless elegance embodied in vibrant emerald green. These lightweight bell-shaped earrings combine traditional jhumka silhouettes with contemporary silk finishes, perfectly complementing both ethnic and modern outfits.",
    },
    {
      id: 3,
      title: "Sapphire Bridal Set",
      category: "Necklaces",
      year: "2024",
      image: import.meta.env.BASE_URL + "silk_necklace.png",
      description: "A stunning statement set featuring royal blue silk threads intricately woven into a majestic necklace and matching earrings. Accented with golden undertones, it’s designed for the moments you want to shine the brightest.",
    }
  ],
};

// Services Section - Disabled for hero-only focus
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "",
  titleLine1: "",
  titleLine2Italic: "",
  description: "",
  services: [],
};

// Why Choose Me Section - Disabled for hero-only focus
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "The Craft",
  titleRegular: "Meticulously",
  titleItalic: "Handmade",
  statsLabel: "Our Impact",
  stats: [
    { value: 50, suffix: "+", label: "Artisans Empowered" },
    { value: 100, suffix: "%", label: "Handcrafted" },
    { value: 5000, suffix: "+", label: "Happy Clients" },
  ],
  featureCards: [
    {
      image: import.meta.env.BASE_URL + "silk_bangles.png",
      imageAlt: "Authentic Materials",
      title: "Premium Silk",
      description: "We source the finest, high-sheen silk threads that resist fading and wear.",
    },
    {
      image: import.meta.env.BASE_URL + "silk_crafting.png",
      imageAlt: "Intricate Detailing",
      title: "Intricate Detailing",
      description: "Every bead and stone is placed by hand, ensuring unparalleled precision.",
    },
  ],
  wideImage: import.meta.env.BASE_URL + "hero-jewelry.jpg",
  wideImageAlt: "Our process",
  wideTitle: "A Symphony of Patience and Skill",
  wideDescription: "At Ramya Creations, each piece takes hours of dedicated craftsmanship. We breathe life into simple materials, weaving them into luxurious, lightweight adornments that celebrate the beauty of womanhood.",
};

// Testimonials Section - Disabled for hero-only focus
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "",
  titleRegular: "",
  titleItalic: "",
  testimonials: [],
};

// FAQ Section - Disabled for hero-only focus
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "",
  titleRegular: "",
  titleItalic: "",
  ctaText: "",
  ctaButtonText: "",
  ctaHref: "",
  faqs: [],
};

// Footer Section - Minimal for hero-only focus
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "Ramya Creations",
  contactLabel: "Get in Touch",
  email: "hello@ramyacreations.com",
  locationText: "Handcrafted in India | Delivered Worldwide",
  navigationLabel: "Explore",
  navLinks: [
    { label: "Collection", href: "#collection" },
    { label: "Our Story", href: "#story" },
    { label: "Craft", href: "#craft" },
  ],
  socialLabel: "Follow Us",
  socialLinks: [
    { iconName: "Instagram", href: "#", label: "Instagram" },
    { iconName: "Facebook", href: "#", label: "Facebook" },
  ],
  tagline: "Where Tradition Meets Modern Grace.",
  copyright: `© ${new Date().getFullYear()} Ramya Creations. All rights reserved.`,
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
