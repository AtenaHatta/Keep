// import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { Link as Li, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import { supabase } from "../lib/supabaseClient";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import { setUser } from "../redux/userSlice";

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes, Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Keep
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                
              <RouterLink to="/register" >
                  "Don't have an account? Sign Up"
                </RouterLink>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}






// const Login = () => {
//   const rmailRef = useRef();
//   const passwordRef = useRef();

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // const handleLogin = async () => {
//   //   const {
//   //     data: { user, error },
//   //   } = await supabase.auth.signIn({
//   //     email: rmailRef.current.value,
//   //     password: passwordRef.current.value,
//   //   });

//   //   if (error) {
//   //     toast.error(error.message);
//   //     return;
//   //   }

//   //   if (user) {
//   //     toast.success("Login successful");
//   //     dispatch(setUser(user));
//   //     navigate("/");
//   //   }
//   // };

//   const handleLogin = async () => {
//     const {
//       data: { user, error },
//     } = await supabase.auth.signIn({
//       email: rmailRef.current.value,
//       password: passwordRef.current.value,
//     });

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     if (user) {
//       toast.success("Login successful");
//       dispatch(setUser(user));
//       navigate("/");
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <input type="email" placeholder="email" ref={rmailRef} />
//       <input type="password" placeholder="password" ref={passwordRef} />
//       <button onClick={handleLogin}>Login</button>
//       <Auth
//         supabaseClient={supabase}
//         appearance={{ theme: ThemeSupa }}
//         providers={["google", "github"]}
//         socialColors={true}
//         socialButtonSize="medium"
//         socialLayout="vertical"
//         socialButtonStyle="icon"
//         view="sign_in"
//         onSuccess={() => {
//           handleLogin();
//         }}
        
//       />
//     </div>
//   );
// };

// export default Login;



