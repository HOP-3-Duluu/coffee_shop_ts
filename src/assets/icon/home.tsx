import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Home_icon = (props) => {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 17.733a1 1 0 01-1 1H1a1 1 0 01-1-1V7.223a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79v10.51zm-2-1V7.71L9 2.267 2 7.71v9.022h14z"
        fill="#838383"
      />
    </Svg>
  )
}
