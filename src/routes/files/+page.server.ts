import { getFiles } from "$lib/server";

export const load = async () => {
  return {
    files: await getFiles(),
  };
};
