import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgTwo = (props) => (
    <Svg viewBox="80 20 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
            fill="#0F62FE"
            d="M134.1 61.5c14.3 9.8 32.9 16.6 41.3 30.2 8.3 13.6 6.3 34-2.4 51.7-8.8 17.7-24.3 32.7-40.3 32.4-16-.2-32.4-15.8-44.6-27.2-12.1-11.3-19.9-18.5-24.5-27.2-4.6-8.7-6.1-18.9-7.8-32.7-1.7-13.7-3.8-31 3.5-42.1 7.4-11 24-15.8 37.3-11.8 13.3 4 23.3 16.9 37.5 26.7Z"
        />
    </Svg>
)

export default SvgTwo;
