import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
            fill="#08BDBA"
            d="M153 59.6c14.4 1.9 24.2 21.2 21.5 37.8-2.6 16.6-17.5 30.6-32 43.1-14.5 12.6-28.5 23.6-41.9 23-13.5-.5-26.3-12.7-26.4-25.3 0-12.5 12.7-25.3 13-37.9.3-12.6-11.9-24.9-11.9-26.8.1-1.8 12.4 6.7 28.2 3.3 15.7-3.5 35-19 49.5-17.2Z"
        />
    </Svg>
)

export default SvgComponent
