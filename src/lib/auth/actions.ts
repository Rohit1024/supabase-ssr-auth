"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { EmailLinkType } from "../validations/auth";

export async function signInWithEmailLink(data: EmailLinkType) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithOtp({
    email: data.email,
    options: {
      emailRedirectTo: "http://localhost:3000/auth/callback",
    },
  });

  return JSON.stringify(result);
}

export async function logoutAction() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
}
