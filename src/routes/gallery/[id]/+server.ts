import { getImageBytes } from "$lib/server";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

const WIDTHS = [400, 800, 1600];

export const GET: RequestHandler = async ({ params, url }) => {
  const requested = Number(url.searchParams.get("w"));
  const width = WIDTHS.includes(requested) ? requested : undefined;

  const image = await getImageBytes(params.id, width);
  if (!image) error(404, "Image introuvable");

  return new Response(image.body, {
    headers: {
      "Content-Type": image.mimeType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
