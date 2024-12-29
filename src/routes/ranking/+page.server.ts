import { getTeams } from '$lib/server'

export const load = async () => {
  const teams = await getTeams()
  return {
    teams,
  }
}
