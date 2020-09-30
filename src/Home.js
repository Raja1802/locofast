import React from 'react';
import Grid from '@material-ui/core/Grid';
import MiniDrawer from "./Sidedrawer"
import MainPage from "./MainPage"

class Home extends React.Component {
  render() {
      return <> 
                 <Grid container spacing={1}>
                 <MiniDrawer></MiniDrawer>
                 </Grid>
                 <Grid container spacing={1}><MainPage/> </Grid>
             </>;
  }
}
export default Home