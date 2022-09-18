import type { ApiContext, Product } from 'types'
import { fetcher } from 'utils'

export type GetProductParams = {
  /**
   * product id
   */
  id: number
}

/**
 * Product API
 * @param context API context
 * @param params Product Id
 * @returns Product
 */
const getProduct = async (
  context: ApiContext,
  { id }: GetProductParams,
): Promise<Product> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/products/${id}`,
    {
      headers: {
        Origin: '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getProduct
