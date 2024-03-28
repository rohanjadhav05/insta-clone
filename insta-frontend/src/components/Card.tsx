import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import { IconButton, InputAdornment } from "@mui/material";

const LoginCard = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
        <Card sx={{ maxWidth: 400, margin:'20px' }}>
            <CardContent>
            <Typography gutterBottom variant="h4" component="div" align='center' fontFamily={'cursive'}>
                Instagram
            </Typography>
            <TextField
                    id="email"
                    label="Phone number, username or email address"
                    type="email"
                    variant="filled"
                    fullWidth
                    required
                    style={{margin:"10px"}}
                    InputLabelProps={{
                        style: { fontSize: 15 } // Adjust the font size as needed
                    }}
                />
                <TextField
                    id="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="filled"
                    fullWidth
                    required
                    style={{margin:"10px"}}
                    InputLabelProps={{
                        style: { fontSize: 15 } // Adjust the font size as needed
                    }}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton size="small" onClick={() => {
                              setShowPassword((prevShowPassword) => !prevShowPassword);
                            }} edge="end" style={{ marginRight: '-10px' }}>
                              {showPassword ? 'Hide' : 'Show'}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                />

            <Button variant="contained" color="primary" fullWidth style={{margin:"10px"}}>
                Log in
            </Button>
            <div style={{display:"flex", margin:"5px"}}>
                <Divider variant='middle' style={{ width: '42%', margin: '16px' }} />
                <Typography variant="body2" style={{paddingTop:"5px"}}>OR</Typography>
                <Divider variant='inset' style={{ width: '42%', margin: '16px' }} />
            </div>
            <Button
                variant="text"
                color="primary"
                startIcon={<FacebookIcon />} // Add FacebookIcon as startIcon
                fullWidth
                style={{ margin: '10px', textTransform: 'none', textAlign:"center"}} // Adjust styling as needed
            >
            Log in with Facebook
            </Button>
            <Typography variant='body2' align='center'>Forgotten your password?</Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, margin:'20px'}}>
            <CardContent style={{display:"flex", justifyContent:"center"}}>
                <Typography variant='body2' align='center'> Don't have an account?{' '}
                <Link href="/signup">
                    Sign up
                </Link>
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default LoginCard