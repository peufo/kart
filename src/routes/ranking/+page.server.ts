import { getChronos } from "$lib/server";

export const load = async () => {
  return {
    chronos: await getChronos(),
  };
};
