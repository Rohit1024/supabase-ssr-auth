"use server";

import { SupabaseUserData } from "@/types/index";
import { createSupabaseServerClient } from "./server";

export async function getSupabaseUser() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getUser();
}

export async function getSupabaseUserData() {
  const supabase = await createSupabaseServerClient();
  const user = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("profiles")
    .select(`full_name, username, avatar_url`)
    .eq("id", user.data.user?.id)
    .single();
  return { data, error } as SupabaseUserData;
}
