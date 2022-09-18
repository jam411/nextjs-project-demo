import type { ApiContext, Category, Condition, Product } from 'types'
import { fetcher } from 'utils'

export type GetAllProductsParams = {
  /**
   * Product category
   */
  category?: Category
  /**
   * Product state
   */
  conditions?: Condition[]
  /**
   * User Id
   */
  userId?: number
  /**
   * sort key
   */
  sort?: keyof Omit<Product, 'owner'>
  /**
   * asc or desc
   */
  order?: 'asc' | 'desc'
  /**
   * limit
   */
  limit?: number
  /**
   * number of page
   */
  page?: number
}

/**
 * Product API（all get）
 * @param context API context
 * @param params Search Result
 * @returns All Products
 */
// eslint-disable-next-line complexity
const getAllProducts = async (
  context: ApiContext,
  {
    category,
    conditions,
    userId,
    page,
    limit,
    sort = 'id',
    order = 'desc',
  }: GetAllProductsParams = {},
): Promise<Product[]> => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`
  const params = new URLSearchParams()

  category && params.append('category', category)
  conditions &&
    conditions.forEach((condition) => params.append('condition', condition))
  userId && params.append('owner.id', `${userId}`)
  page && params.append('_page', `${page}`)
  limit && params.append('_limit', `${limit}`)
  sort && params.append('_sort', sort)
  order && params.append('_order', order)
  const query = params.toString()

  return await fetcher(query.length > 0 ? `${path}?${query}` : path, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  })
}

export default getAllProducts
