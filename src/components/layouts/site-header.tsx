import Link from "next/link";
import { dashboardConfig } from "@/config/dashboard";
import { siteConfig } from "@/config/site";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/layouts/main-nav";
import { MobileNav } from "@/components/layouts/mobile-nav";
import { ModeToggle } from "./mode-toggle";

interface SiteHeaderProps {
  user: {
    name: string;
    email: string;
    image: string;
  } | null;
}

export function SiteHeader({ user }: SiteHeaderProps) {
  const initials = `${user?.name?.charAt(0) ?? ""}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={dashboardConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <ModeToggle />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="relative size-8 rounded-full"
                  >
                    <Avatar className="size-8">
                      <AvatarImage
                        src={
                          user.image ?? "/public/images/profile-placeholder.png"
                        }
                        alt={user.name ?? ""}
                      />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/posts">
                        <Icons.posts
                          className="mr-2 size-4"
                          aria-hidden="true"
                        />
                        Posts
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/account">
                        <Icons.settings
                          className="mr-2 size-4"
                          aria-hidden="true"
                        />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/signout">
                      <Icons.logout
                        className="mr-2 size-4"
                        aria-hidden="true"
                      />
                      Log out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button size="sm">
                <Link href="/signin">
                  Sign In
                  <span className="sr-only">Sign In</span>
                </Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
