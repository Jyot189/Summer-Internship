import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      
    </Typography>
  );
}

const defaultTheme = createTheme();

export const Signin=()=>{
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Password"
                  required
                  fullWidth
                  id="Password"
                  label="Password"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Confirm password"
                  label="Confirm password"
                  name="Confirm password"
                  autoComplete="family-name"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};















// return (<div>signin page</div>);
//    return( 
//     <section class="vh-100 gradient-custom">
//   <div class="container py-5 h-100">
//     <div class="row justify-content-center align-items-center h-100">
//       <div class="col-12 col-lg-9 col-xl-7">
//         <div class="card shadow-2-strong card-registration" >
//           <div class="card-body p-4 p-md-5">
//             <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
//             <form>

//               <div class="row">
//                 <div class="col-md-6 mb-4">

//                   <div class="form-outline">
//                     <input type="text" id="firstName" class="form-control form-control-lg" />
//                     <label class="form-label" for="firstName">First Name</label>
//                   </div>

//                 </div>
//                 <div class="col-md-6 mb-4">

//                   <div class="form-outline">
//                     <input type="text" id="lastName" class="form-control form-control-lg" />
//                     <label class="form-label" for="lastName">Last Name</label>
//                   </div>

//                 </div>
//               </div>

//               <div class="row">
//                 <div class="col-md-6 mb-4 d-flex align-items-center">

//                   <div class="form-outline datepicker w-100">
//                     <input type="text" class="form-control form-control-lg" id="birthdayDate" />
//                     <label for="birthdayDate" class="form-label">Email</label>
//                   </div>

//                 </div>
           
//               </div>

//               <div class="row">
//                 <div class="col-md-6 mb-4 pb-2">
//                   <div class="form-outline">
//                     <input type="email" id="emailAddress" class="form-control form-control-lg" />
//                     <label class="form-label" for="emailAddress">Password</label>
//                   </div>

//                 </div>
//                 <div class="col-md-6 mb-4 pb-2">

//                   <div class="form-outline">
//                     <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
//                     <label class="form-label" for="phoneNumber">Confirm Password</label>
//                   </div>

//                 </div>
//               </div>
//               <div class="mt-2 pt-1">
//                 <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
//               </div>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//    )
