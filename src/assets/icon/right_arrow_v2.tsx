import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Right_arrow_v2 = (props) => {
  return (
    <Svg
      width={9}
      height={16}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 15l7-7-7-7"
        stroke="#2D2A2B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

