import { Box } from '@mui/material'
import React from 'react'
import styles from  './ContactCard.module.css'

const USERS_MOCKUP = [
    {
      id: 1,
      name: 'Lalo MX',
      img: '/public/547216.jpg',
      status: {
        id: 1,
        description: 'active'
      }
    },
    {
      id: 2,
      name: 'Lionel Messi',
      img: '/public/547216.jpg',
      status: {
        id: 0,
        description: 'Disconnect'
      }
    },
    {
      id: 3,
      name: 'Lalo MX',
      img: '/public/547216.jpg',
      status: {
        id: 1,
        description: 'active'
      }
    },
    {
      id: 4,
      name: 'Lalo MX',
      img: '/public/547216.jpg',
      status: {
        id: 1,
        description: 'active'
      }
    }
  ]

export const Contacts = () => {
  return (
    <Box
    sx={{
        height: '100%',
        backgroundColor: 'secondary.main',
        borderRadius: '14px 14px 0px 0px',
        marginTop: '10px',
        padding: '24px 20px'
    }}>
     User
</Box>
  )
}


const ContactCard = ({active}: {active: boolean}) => {
    return(
        <div className={styles.cardContainer}>

        </div>
    )
}
