import React from 'react'
import { Box, Text, Image, Grid } from 'grommet'
import divider from '../../images/divider_gift.svg'

const LabeledImage = props => (
    <Box background="brand">Item 1</Box>

);

const WhatWeDo = props => (
  <Box
    tag="header"
    direction="column"
    align="center"
    justify="between"
    background="light-1"
    pad={{ vertical: 'medium', horizontal: 'medium' }}
    elevation="medium"
    {...props}
  >
    <Text color="brand" size="xlarge">
      Что мы организовываем
    </Text>

    <Box width="medium">
      <Image src={divider} fit="contain" />
    </Box>

    {/* <Text color="dark-3" size="small" textAlign="center">
      Создаем самые стильные и неповторимые торжества в Харькове
    </Text> */}

    <Box pad={{vertical: 'large'}}>
      <Grid
        columns={{
          count: 3,
          size: 'auto',
        }}
        gap="xlarge"
      >
        <LabeledImage></LabeledImage>
        <LabeledImage></LabeledImage>
        <LabeledImage></LabeledImage>
        <LabeledImage></LabeledImage>
      </Grid>
    </Box>
  </Box>
)



export default WhatWeDo
