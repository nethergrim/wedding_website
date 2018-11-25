import React from 'react'
import { Box, Text, Image, Grid } from 'grommet'
import divider from '../../images/divider_gift.svg'
import icon_love from '../../images/love.svg'
import icon_bride from '../../images/bride.svg'
import icon_wedding from '../../images/ceremony.svg'
import icon_proposal from '../../images/proposal.svg'
import icon_coordinator from '../../images/decoration.svg'
import icon_confetti from '../../images/confetti.svg'
import CompoundView from '../common/CompoundView'

const WhatWeDo = props => (
  <Box
    tag="what_we_do"
    direction="column"
    align="center"
    justify="between"
    background="light-1"
    pad={{ vertical: 'medium', horizontal: 'medium' }}
    elevation="medium"
    {...props}
  >
    <Text color="brand" size="xlarge" pad={{ vertical: 'small', horizontal: 'small' }}>
      Что мы организовываем
    </Text>

    <Box width="medium" pad={{ vertical: 'large', horizontal: 'small' }}>
      <Image src={divider} fit="contain" />
    </Box>

    <Box pad={{  horizontal: 'small' }}>
      <Grid
        columns={{
          count: 2,
          size: 'auto',
        }}
        gap="medium"
      >
        <CompoundView text="Свадьба в Украине" image={icon_love} />
        <CompoundView text="Европейское венчание" image={icon_bride} />
        <CompoundView text="Выездная церемония" image={icon_wedding} />
        <CompoundView text="Предложения руки и сердца" image={icon_proposal} />
        <CompoundView text="Координация свадеб" image={icon_coordinator} />
        <CompoundView text="Корпоративы" image={icon_confetti} />
      </Grid>
    </Box>
  </Box>
)

export default WhatWeDo
