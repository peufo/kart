import { getTeams } from '$lib'

export const load = async () => {
  const teams = await getTeams()
  return {
    teams,
  }
}
