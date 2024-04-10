import { Icons } from "@/components/icons";
import {
  AuthError,
  PostgrestError,
  Session,
  User,
} from "@supabase/supabase-js";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export type GlobalConfig = {
  mainNav: MainNavItem[];
};

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface GenericConfig {
  sidebarNav: SidebarNavItem[];
}

export type HeroHeader = {
  header: string;
  subheader: string;
  image: string;
};

export type Content = {
  text: string;
  subtext: string;
  icon?: keyof typeof Icons;
};

export type ContentSection = {
  header: string;
  subheader: string;
  image?: string;
  content: Array<Content>;
};

export interface SupabaseUserData {
  data: {
    full_name: string;
    username: string;
    avatar_url: string;
  } | null;
  error: PostgrestError | null;
}
