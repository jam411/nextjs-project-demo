import styled from 'styled-components'
import type { Responsive } from 'types/styles'
import { toPropValue, Color, Space } from 'utils/styles'

// Box property
export type BoxProps = {
  color?: Responsive<Color>
  backgroudColor?: Responsive<Color>
  width?: Responsive<string>
}

/**
 * Box Component
 * ${(props) => toPropsValue('color', props.color, props.theme)}
 */
const Box = styled.div<BoxProps>`
`