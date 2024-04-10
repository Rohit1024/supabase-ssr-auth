import { ContentSection, HeroHeader, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const heroHeader: HeroHeader = {
  header: `Posts Management made easy`,
  subheader: `Easy to Manage. Customizable. Quick. Responsive.`,
  image: `/images/hero-img.webp`,
};

export const featureCards: ContentSection = {
  header: `Powered by`,
  subheader: `What makes Next Landing possible`,
  content: [
    {
      text: `Next.js`,
      subtext: `The React Framework`,
      icon: "nextjs",
    },
    {
      text: `shadcn/ui`,
      subtext: `Beautifully designed components`,
      icon: "shadcnUi",
    },
    {
      text: `Vercel`,
      subtext: `Develop. Preview. Ship.`,
      icon: "vercel",
    },
  ],
};

export const siteConfig = {
  name: "Supabase ssr auth demo",
  description: "An experimental Supabase SSR auth Demo",
  url: "https://localhost:3000",
  ogImage: "/public/images/backdrop.jpg",
  links: {
    github: "",
  },
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      items: [
        {
          title: "Dashboard",
          href: "/dashboard",
          description: "Dashboard Details",
          items: [],
        },
        {
          title: "Posts",
          href: "/dashboard/posts",
          description: "Manage you posts",
          items: [],
        },
        {
          title: "Account",
          href: "/dashboard/account",
          description: "Manage your account settings",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
};
