import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import StateDropDesign from "./DesignDrop"
import StateDrop from "./FactoryDrop"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
     input: {
    display: 'none',
  },
    small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));
const Design = ({ setForm, formData }) => {
    const classes = useStyles();
  // const [factory, setFactory] = React.useState('-1');
  //   const handleChange = (event) => {
  //   setFactory(event.target.value);
  // };
 
    
  const { factor, desig } = formData;
  return (
       <form className={classes.root} noValidate autoComplete="off">
          <h6 style={{margin: "5px 5px 0px 10px", fontSize: "14px", fontWeight: "600"}}>Factory*</h6>
          <StateDrop label="design" name="factor" value={factor} onChange={setForm} />
          <h6 style={{margin: "5px 5px 0px 10px", fontSize: "14px", fontWeight: "600"}}>Assign for Design*</h6>
          <StateDropDesign label="design" name="desig" value={desig} onChange={setForm} />
       </form>
    
  );
};

export default Design;
