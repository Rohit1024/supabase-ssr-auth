"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { AuthError } from "@supabase/supabase-js";

type providers = "google" | "github";

const oauthProviders = [
  { name: "Google", provider: "google", icon: "google" },
  { name: "Github", provider: "github", icon: "gitHub" },
] satisfies {
  name: string;
  icon: keyof typeof Icons;
  provider: providers;
}[];

export function OAuthSignIn() {
  const [isLoading, setIsLoading] = React.useState<providers | null>(null);
  const supabase = createSupabaseBrowserClient();
  async function oauthSignIn(value: providers) {
    try {
      setIsLoading(value);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: value,
        options: {
          redirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error) {
      if (error instanceof AuthError) {
        toast.error(error.message);
        console.log(error);
      }
      toast.error("Something went wrong, please try again.");
      console.log(error);
    } finally {
      setIsLoading(null);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon];

        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.provider}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={() => void oauthSignIn(provider.provider)}
            disabled={isLoading !== null}
          >
            {isLoading === provider.provider ? (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            ) : (
              <Icon className="mr-2 size-4" aria-hidden="true" />
            )}
            {provider.name}
          </Button>
        );
      })}
    </div>
  );
}
