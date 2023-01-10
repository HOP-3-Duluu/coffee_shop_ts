import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

export const X_icon = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_274_25598)">
        <Path
          d="M10.001 11.178l-4.125 4.125-1.178-1.178L8.823 10 4.698 5.875l1.178-1.178 4.125 4.125 4.125-4.125 1.179 1.178L11.18 10l4.125 4.125-1.179 1.178-4.125-4.125z"
          fill="#2D2A2B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_274_25598">
          <Rect
            x={20}
            y={20}
            width={20}
            height={20}
            rx={2}
            transform="rotate(180 20 20)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

