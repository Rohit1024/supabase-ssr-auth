import type { Metadata } from "next";

import { LogOutButtons } from "@/app/(auth)/_components/logout-button";

import { Shell } from "@/components/shells/shell";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign out",
  description: "Sign out of your account",
};

export default function SignOutPage() {
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign out</CardTitle>
          <CardDescription>Are you sure you want to sign out?</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <LogOutButtons />
        </CardContent>
      </Card>
    </Shell>
  );
}
