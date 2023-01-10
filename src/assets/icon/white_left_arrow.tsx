import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const White_left_arrow = (props) => {
  return (
    <Svg
      width={12}
      height={14}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.998 12.2L2.398 7l5.6-5.2"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Svg>
  )
}

