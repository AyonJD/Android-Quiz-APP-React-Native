import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgComponent from './Src/Components/Svg/SvgComponent'
import SvgTwo from './Src/Components/Svg/SvgTwo'
import SvgFour from './Src/Components/Svg/SvgFour'
import SvgFive from './Src/Components/Svg/SvgFive'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <SvgComponent style={styles.svg} />
      </View>

      <View style={[styles.svgContainer, { top: 100, alignItems: 'flex-start', width: '150%' }]}>
        <SvgTwo style={[styles.svg, { width: '120%', height: 400 }]} />
      </View>

      <View style={[styles.svgContainer, { top: 50, width: '100%', alignContent: 'flex-end', justifyContent: 'flex-end', }]}>
        <SvgFive style={[styles.svg, { width: '110%', height: 800 }]} />
      </View>

      <View style={[styles.svgContainer, { top: 450, left: '-10%', width: '100%', alignContent: 'flex-start', justifyContent: 'flex-start', }]}>
        <SvgFour style={[styles.svg, { width: '100%', height: 600, }]} />
      </View>

    </View >
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    position: 'relative',
  },
  svgContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  svg: {
    width: '100%',
    height: 400,
  },
})