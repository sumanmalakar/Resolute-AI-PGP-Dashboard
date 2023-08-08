import { useState } from "react";
import ResoluteAILogo from "./assets/images/resoluteai-logo.png";
import GoogleIcon from "./assets/images/googleIcon.svg";
import WelspunLogo from "./assets/images/welspun_logo1.jpg";
import SuperUserBg from "./assets/images/bottle.png";
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import './Google.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase.config'
import {
  Grid,
  Hidden,
  Typography,

  Box,
  Button,
  Snackbar,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

//Custom styling
const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${SuperUserBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  formHolder: {
    maxWidth: "390px",
    textAlign: "center",
  },
  textFields: {
    margin: "2rem",
  },
  heading: {
    padding: "1rem",
  },
  marginTop3: {
    marginTop: "0.1rem",
  },
  margin:{
    margin:"2rem",
  },
});

export default function Login() {

  const classes = useStyles();


  const navigate = useNavigate()
  const location = useLocation()


  // const history = useHistory();
  //SNACKBAR ERROR STATE
  const [handleFirebaseError, setHandleFirebaseError] = useState(false);
  const [fieldMissing, setFieldMissing] = useState(false);

  //DataContext
  // const { login } = useContext(AuthContext);

  //SNACK BAR CLOSE
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setHandleFirebaseError(false);
    setFieldMissing(false);
  };

  //Form state
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
  setFormdata({ ...formData, [e.target.name]: e.target.value });
  const { email, password } = formData;

  //LOGIN CLIENT
  const handleLogin = () => {
    if (!email || !password) {
      setFieldMissing(true);
    } else {
      // login(email, password);
    }
  };


  
  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // // Check for user
      // const docRef = doc(db, 'users', user.uid)
      // const docSnap = await getDoc(docRef)

      // // If user, doesn't exist, create user
      // if (!docSnap.exists()) {
      //   await setDoc(doc(db, 'users', user.uid), {
      //     name: user.displayName,
      //     email: user.email,
      //     timestamp: serverTimestamp(),
      //   })
      // }
      navigate('/dashboard')
    } catch (error) {
    //   toast.error('Could not authorize with Google')
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Hidden smDown>
        <Grid container md={7} item className={classes.image}>
        </Grid>
      </Hidden>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        container
        direction="column"
        justifyContent="center"
      >
        <Box className={classes.formHolder} mx="auto">
        
      
          <Box textAlign="center" className={classes.marginTop3}>
           
            <Typography variant="h5" style={{margin:'1rem',fontWeight:"500"}} >
             Bottle Counting Dashboard
            </Typography>
          </Box>
         

          {/* <ValidatorForm> */}
          
          <TextField
              placeholder="Email Address"
              label="Email Address"
              className={classes.margin}
              fullWidth
              variant="outlined"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
             style={{margin:"1rem"}}
            />
            
            <TextField
              placeholder="Password"
              type="password"
              label="Password"
              className={classes.margin}
              fullWidth
              variant="outlined"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              style={{margin:"1rem"}}

            />
            <div 

             style={{display:"flex", justifyContent:'space-between', marginLeft:"1.5rem", marginBottom:'1rem'}}>
              <div>
             Rememer Me
              </div>
           
               <div  style={{color:'red'}}>Forgot Password</div>
           
            </div>
            <Button
              variant="contained"
              
              fullWidth
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className={classes.margin}
              style={{margin:"1rem", backgroundColor:'red', fontWeight:'700', textTransform:'none'}}


            >
              Log in
            </Button>
            <Button
              variant="contained"
              
              fullWidth
              type="submit"
              onClick={onGoogleClick}
              className={classes.margin}
              style={{margin:"1rem", backgroundColor:'white', color:'red', fontWeight:'700',textTransform:'none'}}


            >
               
            <img src={GoogleIcon} alt="Google Icon" className="google-icon"/>
            <span class="google-text">Sign with Google</span>
          
            </Button>

          

            <Typography style={{margin:'1rem'}} >
             The Product is Powered by 
            </Typography>
            <img src={ResoluteAILogo} alt="FaceGenieLogo" width="45%" height="55px" />
         
        </Box>


        
      </Grid>
     
    </Grid>
  );
}
