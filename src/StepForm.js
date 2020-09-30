import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Avatar from '@material-ui/core/Avatar';
const Styles = {
    UploadBtnCss: {
        margin: "5px 5px 5px 20px",
        border: "1px dashed grey",
        width: "300px",
        textTranform: "capitalize"
    }
    
}
const factorys = [
  {
    value: '0',
    label: 'amaya factory',
  },
  {
    value: '1',
    label: 'Amaya Factory',
  },
 {
    value: '2',
    label: 'Amaya Factory',
  },
  {
    value: '3',
    label: 'Amaya Factory',
  },
  {
    value: '4',
    label: 'Amaya Factory',
  },
];
const designs = [
  {
    value: '0',
    label: 'amaya design',
  },
  {
    value: '1',
    label: 'Amaya design',
  },
 {
    value: '2',
    label: 'Amaya design',
  },
  {
    value: '3',
    label: 'Amaya design',
  },
  {
    value: '4',
    label: 'Amaya design',
  },
];
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

export default function MultilineTextFields() {
  const classes = useStyles();
  const [factory, setFactory] = React.useState('-1');
  const [design, setDesign] = React.useState('-1');

  const handleChange = (event) => {
    setFactory(event.target.value);
  };
  const handleDesignChange = (event) => {
    setDesign(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
       
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Factory*"
          value={factory}
          onChange={handleChange}
          helperText="Please select your Factory"
          variant="outlined"
        >
          {factorys.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
          <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Assign for Design*"
          value={design}
          onChange={handleDesignChange}
          helperText="Please Assign a Design"
          variant="outlined"
        >
          {designs.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            <Avatar style={{margin: "0px 10px"}} alt="Remy Sharp" src="https://res.cloudinary.com/dajarstore/image/upload/c_fill,h_80,w_80/v1601441948/photo-1562003389-902303a38425_p7z3ru.webp" className={classes.small} />
              {option.label}
                    <br/>
            </MenuItem>
          ))}
        </TextField>
        
      </div>
      <div>
         <TextField
          id="filled-full-width"
          label="Assign the Quantity*"
          style={{ margin: 8 }}
          placeholder="Enter Quantity"
          helperText="Available Inventory 1660 meters "
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
             style={{width: "50%"}}
             variant="outlined"
        />
         
      </div>
      <div className={classes.root}>
          <h6 style={{margin: "5px 5px 5px 20px", fontSize: "14px", fontWeight: "600"}}>Attach Challen*</h6>
      <input
        accept="*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button style={Styles.UploadBtnCss} component="span">
          Select File <AttachFileIcon style={{color: "black", marginLeft: "20px", flot: "right"}}/>
        </Button>
      </label>
      
    </div>
    </form>
  );
}
