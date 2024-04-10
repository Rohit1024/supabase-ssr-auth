import * as z from "zod";

export const email_link_schema = z.object({
  email: z
    .string({
      required_error: "Email is Required",
    })
    .email({
      message: "Please enter a valid email address",
    }),
});

export type EmailLinkType = z.infer<typeof email_link_schema>;

export const userPrivateMetadataSchema = z.object({
  role: z.enum(["user", "admin", "super_admin"]),
  stripePriceId: z.string().optional().nullable(),
  stripeSubscriptionId: z.string().optional().nullable(),
  stripeCustomerId: z.string().optional().nullable(),
  stripeCurrentPeriodEnd: z.string().optional().nullable(),
});

export type userPrivateMetadataType = z.infer<typeof userPrivateMetadataSchema>;
