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
import { UserDto, loginUser } from '@/service/homeService';
import { useRouter } from 'next/router';

const LoginCard = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter();
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleInputChange = (e : any) => {
    const { id, value } = e.target;
    switch (id) {
        case 'userName':
            setUserName(value);
            break;
        case 'password':
            setUserPass(value);
            break;
        default:
            break;
    }
    console.log("UserPass : "+userPass);
    if (userName && userPass) {
        setIsFormFilled(true);
    } else {
        setIsFormFilled(false);
    }
};
  
  return (
    <div>
        <Card sx={{ maxWidth: 400, margin:'20px' }}>
            <CardContent>
            <Typography gutterBottom variant="h4" component="div" align='center' fontFamily={'cursive'}>
                Instagram
            </Typography>
            <TextField
                    id="userName"
                    label="Phone number, username or email address"
                    type="email"
                    variant="filled"
                    fullWidth
                    required
                    style={{margin:"10px"}}
                    InputLabelProps={{
                        style: { fontSize: 15 } // Adjust the font size as needed
                    }}
                    onChange={(e) => {
                      handleInputChange(e)
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
                    onChange={(e) => {
                      handleInputChange(e)
                    }}
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

            <Button variant="contained" 
                    color="primary" 
                    fullWidth 
                    style={{margin:"10px"}} 
                    disabled={!isFormFilled}
                    onClick={async () => {
                      const userPhone : string = "";
                      const userPost : number = 0;
                      const userFullName : string = "";
                      const userDto : UserDto = {userName, userPhone, userFullName, userPass, userPost};
                      if(userName.length == 0){
                        window.alert("Please enter UserName")
                      }
                      else if(userPass.length == 0){
                        window.alert("Please enter Password")
                      }else{
                        loginUser(userDto).then((response) => {
                          router.push("/home");
                        }).catch(err => {
                          console.log(err);
                        })
                      }
                    }}>
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