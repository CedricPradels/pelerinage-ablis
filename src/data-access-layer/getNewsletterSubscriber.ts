"use server";

import { GET_NEWSLETTER_SUBSCRIBER_ENDPOINT } from "@/constants/env";

export const getNewsletterSubscriber = async (payload: {
  email: string;
}): Promise<{ subscribed: boolean }> => {
  const scriptUrl = GET_NEWSLETTER_SUBSCRIBER_ENDPOINT;

  const response = await fetch(scriptUrl, {
    method: "POST",
    body: JSON.stringify({
      email: payload.email,
    }),
  });

  if (!response.ok) throw new Error("get newsletter subscriber fail");

  return response.json();
};
