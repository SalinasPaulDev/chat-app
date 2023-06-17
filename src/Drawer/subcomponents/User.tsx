import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const User = () => {
  return (
    <Box
        sx={{
            height: 100,
            backgroundColor: 'secondary.main',
            borderRadius: '0px 0px 14px 14px',
            paddingLeft: '35px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'

        }}>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         <div>
            <Typography variant='body1' fontWeight={600} color={'text.primary'} fontSize={'15px'} >Brian Salinas</Typography>
            <StatusLabel />
         </div>
    </Box>
  )
}


const StatusLabel = () => {
    const status = [
        {
            id: 0,
            label: 'Disconnect'
        },
        {
            id: 1,
            label: 'Active'
        },
        {
            id: 2,
            label: 'Absent'
        },
        {
            id: 3,
            label: 'Active'
        }
    ]
    return (
        <Box sx={{
            minWidth: '88px',
            height: '20px',
            backgroundColor: 'primary.dark',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px'
        }}>
            <Box sx={{
                width: '8px',
                height: '8px',
                backgroundColor: 'yellow',
                borderRadius: '50%'
            }}>
            </Box>
            <Typography typography={'p'} fontSize={'12px'} color={'text.secondary'}>Working</Typography>
            <KeyboardArrowDownIcon color='secondary'/>
        </Box>
    )
}
