import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgFour = (props) => (
    <Svg viewBox="50 0 100 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fill="#F1C21B"
      d="M140 41.4c12.3 12.4 22.9 23.6 24.3 35.8 1.4 12.3-6.4 25.7-12.3 38.5-5.8 12.8-9.6 25.1-18 30.3-8.3 5.2-21.2 3.4-30.7-1.1-9.6-4.5-15.9-11.7-19.8-18.4-4-6.6-5.7-12.7-13.4-20.5-7.7-7.9-21.5-17.5-26.9-31.8-5.5-14.3-2.6-33.1 8.2-46C62.3 15.3 81.2 8.4 97.5 11.8c16.4 3.4 30.3 17.1 42.5 29.6Z"
    />
  </Svg>
)

export default SvgFour;
