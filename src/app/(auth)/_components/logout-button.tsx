"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/icons";
import { logoutAction } from "@/lib/auth/actions";
import { toast } from "sonner";

export function LogOutButtons() {
  const router = useRouter();
  const mounted = useMounted();
  const [isPending, startTransition] = React.useTransition();

  return (
    <div className="flex w-full items-center space-x-2">
      {mounted ? (
        <Button
          aria-label="Log out"
          size="sm"
          className="w-full"
          disabled={isPending}
          onClick={() => {
            startTransition(async () => {
              await logoutAction().then(() => {
                toast.success("Signed out Successfully");
              });
              router.push(`${window.location.origin}`);
            });
          }}
        >
          {isPending && <Icons.spinner className="mr-2 size-4 animate-spin" />}
          Sign out
        </Button>
      ) : (
        <Skeleton
          className={cn(
            buttonVariants({ size: "sm" }),
            "w-full bg-muted text-muted-foreground"
          )}
        >
          Log out
        </Skeleton>
      )}
      <Button
        aria-label="Go back to the previous page"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => router.back()}
        disabled={isPending}
      >
        Go back
      </Button>
    </div>
  );
}
