"use server";

import { INSERT_NEWSLETTER_EMAIL_ENDPOINT } from "@/constants/env";

export const subscribeToNewsletter = async (payload: {
  email: string;
}): Promise<void> => {
  const scriptUrl = INSERT_NEWSLETTER_EMAIL_ENDPOINT;

  const response = await fetch(scriptUrl, {
    method: "POST",
    body: JSON.stringify({
      email: payload.email,
    }),
  });

  if (!response.ok) throw new Error("subscribe to newsletter failed");
};
