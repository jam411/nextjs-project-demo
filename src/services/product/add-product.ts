import type { ApiContext, Product } from 'types'
import { fetcher } from 'utils'

export type AddProductsParams = {
  /**
   * add product
   */
  product: Omit<Product, 'id'>
}

/**
 * Product API（new）
 * @param context API context
 * @param params New Product
 * @returns New Product
 */
const addProduct = async (
  context: ApiContext,
  { product }: AddProductsParams,
): Promise<Product> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/products`, {
    method: 'POST',
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(product),
  })
}

export default addProduct
