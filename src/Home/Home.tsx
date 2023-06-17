import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'

export const Home = () => {
  return (
    <div style={{textAlign: 'center'}}>
    <Typography variant="h2" component="h2" width={400} fontSize={42} textAlign={'center'} margin={'100px auto'}>
      Bienvenido a la nueva aplicacion de chat para Latam hecha en Latam                                    
    </Typography>
    
    <div style={{display: 'flex', justifyContent: 'center', gap:30}}>
      <Button variant="text">Privacy terms</Button>
      <Button variant="contained" size='large' >Let’s go!</Button>
    </div>
   </div>
  )
}





export const UserNameField = () => {
  return (
    <div>      <div style={{width: '60%', margin:'150px auto auto', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', gap: 30}}>
    <Typography typography="h3" margin={'auto'} textAlign={'center'}>Ingresa tu nombre</Typography>
    <TextField id="standard-basic" label="Nombre" variant="standard" />
    <Button>Continuar</Button>
    </div></div>
  )
}
