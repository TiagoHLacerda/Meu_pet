import React from "react";
import Toolbar from "./Assets/components/toolbar.js";
//import './App.css';
import Body from "./Assets/components/body.js"
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#CFD8DC',
    // maxWidth: '40rem',


  },
  cont: {

  },


}));
function App() {

  const classes = useStyles();

  return (
<div>
    <div className={classes.root}>

      <Toolbar></Toolbar>
      <Grid classes={classes.cont}  >

        <Body></Body>

      </Grid>
    </div>
    <Grid>
<div>

</div>




         
      </Grid>

    </div>
  );
}

export default App;
