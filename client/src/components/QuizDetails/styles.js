import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '400px',
  },
  button: {
    marginLeft: '60px',
  },
  card: {
    display: 'flex',
    width: '100%',
    marginTop: '20px',
    borderRadius: '5px',
    padding: '10px 20px',
    backgroundColor: '#F5F5F5',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    marginTop: '50px',
    marginLeft: '50px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    margin: '10px',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedQuizes: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  typography: {
    marginTop: '10px',
  },
  questionList: {
    backgroundColor: '#F2EAD3',
    borderRadius: '5px',
    marginTop: '20px',
    padding: '10px 20px ',
  },
  cardBody: {
    width: '90%',
    hieght: '90%',
    padding: '5px 10px',
  },
  result: {
    marginTop: '20px',
    marginLeft: '60px',
    marginBottom: '10px',
  },
}));
