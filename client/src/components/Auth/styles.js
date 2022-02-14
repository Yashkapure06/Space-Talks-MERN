import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),color:'#fff',
    backgroundColor:'#68516947',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    color:'#fff',
    fontFamily:"'Cormorant Upright', serif",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
    bg:{
    borderRadius: 7,
    backgroundColor:'#68516999',
    color:'#fff'
  },
}));


// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
      
//     },
//     color:'#fff',
    
//     fontFamily:"'Cormorant Upright', serif"
//   },
//   paper: {
//     padding: theme.spacing(2),
//     color:'#fff',
//     backgroundColor:'#68516947'
//   },
//   bg:{
//     borderRadius: 7,
//     backgroundColor:'#68516999',
//     color:'#fff'
//   },
//   form: {
//     color:'#fff',
//     display: 'flex',
//     width: '100%', 
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginTop: theme.spacing(3),
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   googleButton: {
//     marginBottom: theme.spacing(2),
//   },
// }));
