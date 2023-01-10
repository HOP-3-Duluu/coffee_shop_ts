import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

export const Left_arrow = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_268_25590)">
        <Path
          d="M10.827 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414-4.95 4.95z"
          fill="#2D2A2B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_268_25590">
          <Rect
            x={24}
            y={24}
            width={24}
            height={24}
            rx={2}
            transform="rotate(180 24 24)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
