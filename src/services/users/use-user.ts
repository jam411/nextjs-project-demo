import useSWR from 'swr'
import type { ApiContext, User } from 'types'

export type UseUserProps = {
  /**
   * User Id
   */
  id: number
  /**
   * Init state
   */
  initial?: User
}

export type UseUser = {
  /**
   * User
   */
  user?: User
  /**
   * Load flag
   */
  isLoading: boolean
  /**
   * Error flag
   */
  isError: boolean
}

/**
 * User API custom hook
 * @param context API context
 * @returns user and API call state
 */
const useUser = (
  context: ApiContext,
  { id, initial }: UseUserProps,
): UseUser => {
  const { data, error } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
  )

  return {
    user: data ?? initial,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useUser
