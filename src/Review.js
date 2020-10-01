import React from "react";
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Alert from '@material-ui/lab/Alert';
const Styles = {
    UploadBtnCss: {
        margin: "5px 5px 5px 10px",
        backgroundColor:"#F2F2F2",
        textTranform: "capitalize",
        maxWidth: "300px",
        overflow: "hidden"
    }
    
}
const Review = ({ setForm, formData }) => {
  const {
    factor,
    desig,
    quanti,
     file
  } = formData;

  return (
    <div className="form">
          <Alert style={{backgroundColor:"#fffee6", marginLeft: "10px", border: "1px solid #e6e6e6", color:"#000126", fontWeight: "600"}} severity="error">You won't be able to change details later.</Alert>
          <h6 style={{margin: "10px 5px 0px 20px", fontSize: "14px", fontWeight: "500", color: "#676773"}}>Factory</h6>
          <h4 style={{margin: "5px 5px 0px 20px", fontSize: "14px", fontWeight: "600"}}>{`${factor}`}</h4>
    
          <h6 style={{margin: "20px 5px 0px 20px", fontSize: "14px", fontWeight: "500", color: "#676773"}}>Assign for Design</h6>
          <h4 style={{margin: "5px 5px 0px 20px", fontSize: "14px", fontWeight: "600"}}>{`${desig}`}</h4>
    
          <h6 style={{margin: "20px 5px 0px 20px", fontSize: "14px", fontWeight: "500", color: "#676773"}}>Assign Quantity</h6>
          <h4 style={{margin: "5px 5px 0px 20px", fontSize: "14px", fontWeight: "600"}}>{`${quanti}`}</h4>
     
          <h6 style={{margin: "20px 5px 0px 20px", fontSize: "14px", fontWeight: "500", color: "#676773"}}>Challen</h6>
           <Button style={Styles.UploadBtnCss} component="span">
          {`${file}`} <VisibilityIcon style={{color: "black", float: "right", marginLeft: "40px"}}/>
        </Button>
    
    </div>
  );
};

export default Review;
