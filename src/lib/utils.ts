import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const unknownError =
  "An unknown error occurred. Please try again later.";

export const redirects = {
  toLogin: "/signin",
  toSignup: "/signup",
  afterLogin: "/dashboard/posts",
  afterLogout: "/",
  toVerify: "/verify-email",
  afterVerify: "/dashboard/posts",
} as const;

export const databasePrefix = "firebase-service";
