import type { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type GetUserParams = {
  /**
   * UserID
   */
  id: number
}

/**
 * User API
 * @param context API Context
 * @param params Parameter
 * @returns User
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
  // User API
  // Sample response
  {
    "id": "1",
    "username": "john",
    "displayName": "John Doe",
    "email": "john@example.com",
    "profileImageUrl": "/users/1.png",
    "description": "Lorem Ipsum is simply dummy text of the printing and
    typesetting industry"
  }
   */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser
