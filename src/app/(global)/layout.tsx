import Link from "next/link";

import { globalConfig } from "@/config/global-config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/layouts/main-nav";
import {
  getSupabaseUser,
  getSupabaseUserData,
} from "@/lib/supabase/getSupabaseUser";
import { UserAccountNav } from "@/components/layouts/user-account-nav";
import { ModeToggle } from "@/components/layouts/mode-toggle";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function GlobalLayout({ children }: MarketingLayoutProps) {
  const data = await getSupabaseUser();

  const userData = await getSupabaseUserData(data.data.user?.id!);
  if (userData.error) {
    console.log(userData.error);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={globalConfig.mainNav} />
          <nav>
            {data.data.user ? (
              <div className="flex items-center space-x-4">
                <ModeToggle />
                <UserAccountNav
                  userData={userData.data}
                  email={data.data.user?.email!}
                />
              </div>
            ) : (
              <Link
                href="/signin"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "px-4"
                )}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  );
}
