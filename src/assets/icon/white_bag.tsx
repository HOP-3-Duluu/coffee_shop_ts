import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const White_Bag = (props) => {
  return (
    <Svg
      width={13}
      height={19}
      viewBox="0 0 13 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.18 6.054h10.636V15.4a2 2 0 01-2 2H3.18a2 2 0 01-2-2V6.054z"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M3.309 4.991a3.191 3.191 0 013.19-3.19v0a3.191 3.191 0 013.192 3.19v1.064H3.309V4.991z"
        stroke="#fff"
        strokeWidth={2}
      />
    </Svg>
  )
}

