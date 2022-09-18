import useSWR from 'swr'
import type { ApiContext, Category, Condition, Product } from 'types'

export type UseSearchProps = {
  /**
   * Product Category
   */
  category?: Category
  /**
   * Product Condition
   */
  conditions?: Condition[]
  /**
   * User ID
   */
  userId?: number
  /**
   * Sort key
   */
  sort?: keyof Omit<Product, 'owner'>
  /**
   * asc or desc
   */
  order?: 'asc' | 'desc'
  /**
   * init state
   */
  initial?: Product[]
}

export type UseSearch = {
  /**
   * search result list
   */
  products: Product[]
  /**
   * load flag
   */
  isLoading: boolean
  /**
   * error flag
   */
  isError: boolean
}

/**
 * Product API custom hook
 * @param context API context
 * @param params Search param
 * @returns Product list, state of API call
 */
const useSearch = (
  context: ApiContext,
  {
    category,
    userId,
    conditions,
    initial,
    sort = 'id',
    order = 'desc',
  }: UseSearchProps = {},
): UseSearch => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`
  const params = new URLSearchParams()

  category && params.append('category', category)
  userId && params.append('owner.id', `${userId}`)
  conditions &&
    conditions.forEach((condition) => params.append('condition', condition))
  sort && params.append('_sort', sort)
  order && params.append('_order', order)
  const query = params.toString()
  const { data, error } = useSWR<Product[]>(
    query.length > 0 ? `${path}?${query}` : path,
  )

  return {
    products: data ?? initial ?? [],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useSearch
