import { MainNavItem, NavItem, type SidebarNavItem } from "@/types";

export interface DashboardConfig {
  mainNav: NavItem[];
  sidebarNav: SidebarNavItem[];
}

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      description: "Dashboard Details",
    },
    {
      title: "Posts",
      href: "/dashboard/posts",
      description: "Manage you posts",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Read our latest blog posts.",
    },
  ],
  sidebarNav: [
    {
      title: "Posts",
      href: "/dashboard/posts",
      icon: "posts",
      items: [],
    },
    {
      title: "Account",
      href: "/dashboard/account",
      icon: "avatar",
      items: [],
    },
  ],
};
