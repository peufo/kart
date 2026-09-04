import { getImages } from "$lib/server";

export const load = async () => {
  return {
    images: await getImages(),
  };
};
