"use client";

import { useTheme } from "next-themes";

export function UserProfile() {
  const { theme } = useTheme();

  return <h1>Profile Page</h1>;
}
