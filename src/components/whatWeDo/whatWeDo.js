import React from 'react'
import { Box, Grommet } from 'grommet'

const WhatWeDo = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="light-1"
    pad={{ vertical: 'small', horizontal: 'medium' }}
    elevation="medium"
    {...props}
  />
);

export default WhatWeDo
