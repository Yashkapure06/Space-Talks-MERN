import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#68516947'
  },
  heading: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '85px',
  },
  image: {
    marginLeft: '10px',
  },
  toolbar: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '255px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
  },
  signin:{
    fontSize:20,
    color:'#fff',
    backgroundColor:'#68516999',
  },
  userName: {
    display: 'flex',
    color: '#fff',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  // const matches = useMediaQuery('(min-width:600px)');
  // return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}));


