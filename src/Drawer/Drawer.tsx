import { Box } from '@mui/material'
import React from 'react'
import { User } from './subcomponents/User'
import { Contacts } from './subcomponents/Contacts'


export const Drawer = () => {
  return (
    <Box
    sx={{
      width: 350,
      height: '100vh',
    }}>
      <User />
      <Contacts/>
    </Box>
  )
}
