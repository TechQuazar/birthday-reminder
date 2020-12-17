import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../../home.css';
const Home = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Typography variant='h6'>BIRTHDAY FU'KIN REMINDER</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Home;
