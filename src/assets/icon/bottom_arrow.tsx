import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Bottom_arrow = (props) => {
  return (
    <Svg
      width={13}
      height={8}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.363 4.95L1.413 0-.001 1.414l6.364 6.364 6.364-6.364L11.313 0l-4.95 4.95z"
        fill="#969495"
      />
    </Svg>
  )
}

