import useSWR from 'swr'
import type { ApiContext, Product } from 'types'

export type UseProductProps = {
  /**
   * Product ID
   */
  id: number
  /**
   * init state
   */
  initial?: Product
}

export type UseProduct = {
  /**
   * Product
   */
  product?: Product
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
 * Product API custom hook
 * @param context API context
 * @param params Prodct ID, init state
 * @returns Product, State of API call
 */
const useProduct = (
  context: ApiContext,
  { id, initial }: UseProductProps,
): UseProduct => {
  const { data, error } = useSWR<Product>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/products/${id}`,
  )

  return {
    product: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useProduct
