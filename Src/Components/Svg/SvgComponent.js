import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg viewBox="0 60 10 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
            fill="#F06"
            d="M158.2 47.4c16.3 10.8 28.2 31.7 24.3 48.7-3.9 16.9-23.7 29.9-40.1 41.7-16.4 11.8-29.4 22.4-47.1 27.1-17.7 4.7-40.1 3.5-53.7-8.3-13.6-11.8-18.3-34.2-17.8-56.1.6-21.8 6.4-43.2 19.9-54 13.6-10.8 35-11.1 56.1-10.9 21.1.3 42 1 58.4 11.8Z"
        />
    </Svg>
)

export default SvgComponent
