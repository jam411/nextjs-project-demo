import type { ApiContext } from 'types'
import { fetcher } from 'utils'

/**
 * Authentication API (sign out)
 * @param context API Context
 * @returns Sign out message
 */
const signout = async (context: ApiContext): Promise<{ message: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(\/\$/g, '')}/auth/signout`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default signout