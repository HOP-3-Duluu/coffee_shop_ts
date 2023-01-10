import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Right_arrow = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.173 12l-4.95 4.95 1.414 1.414L16 12 9.637 5.636 8.223 7.05l4.95 4.95z"
        fill="#fff"
      />
    </Svg>
  )
}
