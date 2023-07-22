import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  commentContainer: {
    backgroundColor: '#F2EAD3',

    padding: '20px 20px ',
    marginTop: '30px',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));
