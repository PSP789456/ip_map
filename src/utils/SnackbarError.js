import React, { useEffect, forwardRef, useContext, useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ContextAPI } from '../App';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const SnackbarError = ({apiErrorText}) => {
const { apiError, setApiError } = useContext(ContextAPI);
const [open, setOpen] = useState(false);
useEffect(() => {
    if (apiError) {
      setOpen(true);
      setApiError(false);
    }
// eslint-disable-next-line
}, [apiError])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{horizontal:"center", vertical:"bottom"}}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {apiErrorText === "" ? "Api Error!" : apiErrorText}
        </Alert>
      </Snackbar>
  )
}

export default SnackbarError