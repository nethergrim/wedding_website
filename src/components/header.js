import React from 'react'
import background from '../images/background_bride.jpg'
import image_title from '../images/title.png'
import Image from './common/Image'
import ParallaxMousemove from 'react-parallax-mousemove'
import { Box } from 'grommet'

class Header extends React.Component {
  render() {
    const style = {
      outter: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      },
      bgLayerStyle: {
        position: 'relative',
      },
    }

    return (
      <Box>
        <Image src={background} width={'100%'} height={700} mode="fill" />
        {/* <Image src={image_title} width={'100%'} height={500} mode="fit" /> */}
      </Box>
      // <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
      //   <ParallaxMousemove.Layer
      //     layerStyle={style.bgLayerStyle}
      //     config={{
      //       xFactor: 0.0,
      //       yFactor: 0,
      //       springSettings: {
      //         stiffness: 50,
      //         damping: 30,
      //       },
      //     }}
      //   >
      //     <div
      //       style={{
      //         width: '100%',
      //         height: '100%',
      //         position: 'absolute',
      //         top: 0,
      //         left: 0,
      //       }}
      //     >

      //   </div>
      // </ParallaxMousemove.Layer>

      // <ParallaxMousemove.Layer
      //   layerStyle={style.bgLayerStyle}
      //   config={{
      //     xFactor: 0.15,
      //     yFactor: 0.15,
      //     springSettings: {
      //       stiffness: 150,
      //       damping: 50,
      //     },
      //   }}
      // >
      //   <div
      //     style={{
      //       width: '100%',
      //       height: '100%',
      //       position: 'absolute',
      //       top: 0,
      //       left: 0,
      //     }}
      //   >

      //     </div>
      //   </ParallaxMousemove.Layer>
      // </ParallaxMousemove>
    )
  }
}

export default Header
