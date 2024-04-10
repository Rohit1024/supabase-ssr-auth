"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { Next13ProgressBar } from "next13-progressbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
      <Next13ProgressBar
        height="4px"
        color="#0A2FFF"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </NextThemesProvider>
  );
}
