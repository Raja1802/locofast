import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MultilineTextFields from "./StepForm"
import Paper from '@material-ui/core/Paper';

const Styles = {
     DialogCss: {
    },
    DialogContentCss: {
        overflow: "hidden"
    },
    DialogImgCss: {
        width: "100%",
        height: "400px",
        objectFit: "cover",
        overflow: "hidden",
        borderRadius: "5px"
    },
    DialogSmallHeadingCss: {
        fontSize: "20px",
        fontWeight: "bold",
        textTranform: "capitalize",
        margin: "5px 5px 10px 30px"
    },
    mainstylecss: {
        marginTop: "70px",
        width: "100%",
        marginLeft: "78px"
    },
    TopTabContainer:{
      height: "56px",
      borderBottom: "1px solid #e0e0e0",
    },
    SideSpaceCss: {
        height: "100%",
        borderRight: "1px solid #e0e0e0",
        marginTop: "5px",
    },
    btnCss1: {
        margin: "10px",
        marginLeft: "30px",
        background: "#E5F1FF",
        height: "32px",
        color: "#0067E2",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "14px"
    },
    btnCss2: {
        margin: "10px",
        marginLeft: "10px",
        height: "32px",
        color: "#000",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "14px"
    },
    btnCss3: {
        margin: "10px",
        marginLeft: "30px",
        height: "32px",
        color: "black",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "14px",
        border: "1px solid #d2d2d2"
    },
    btnCss4: {
        margin: "10px",
        marginLeft: "10px",
        background: "#0067E2",
        height: "32px",
        color: "#fff",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "14px"
    },
    ItemOuterGridCss: {
        padding: "20px 20px 20px 20px",
    },
    
    ItemPaperCss:{
        height: "358px",
    },
    ImgCss: {
        width: "100%",
        height: "260px",
        objectFit: "cover",
        borderRadius: "5px 5px 0px 0px",
    },
    TextCss: {
        fontSize: "14px",
        maxHeight: "45px",
        margin: "5px 5px 3px 10px",
        LineHeight: "20px",
        fontWeight: "600",
        overflow: "hidden"
    },
    SmallTextCss: {
        fontSize: "12px",
        LineHeightn: "17px",
        maxHeight: "20px",
        margin: "10px 5px 3px 10px",
        color: "#676773",
    }
}
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
   const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
     
       <Grid item xs={3}>
          <a style={{textDecoration: "none",     cursor: "pointer",}} onClick={handleClickOpen}>
                                <Paper  elevation={0} className="paperItemPaper" style={Styles.ItemPaperCss}>
                                    <img style={Styles.ImgCss} src="https://images.unsplash.com/photo-1518019671582-55004f1bc9ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80" alt="fabric"/>
                                    <h1 style={Styles.TextCss}>100% Cotton Navy/White Colour Oxford Chambery</h1>
                                    <h6 style={Styles.SmallTextCss}>8 more colors</h6>
                                </Paper>  
              </a>
                            </Grid>
      <Dialog style={Styles.DialogCss} fullWidth={fullWidth}
        maxWidth={maxWidth} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
            <h6 style={{fontWeight: "bold", textTranform: "capitalize", margin: "0px", fontSize: "1em"}}>Material Details</h6>
          
        </DialogTitle> 
        <DialogContent style={Styles.DialogContentCss} dividers>
            <Grid container spacing={1}>
                <Grid container item xs={4} spacing={1}>
                    <img style={Styles.DialogImgCss} src="https://images.unsplash.com/photo-1518019671582-55004f1bc9ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80" alt="img"/>
                </Grid>
                <Grid container item xs={8} spacing={1}>
                    <Grid item xs={12}> <h4 style={Styles.DialogSmallHeadingCss}> <ArrowBackIcon style={{color: "black", marginRight: "20px",marginTop: "5px", fontSize: "22px", lineHeight: "24px"}}/>Assign to factory</h4></Grid>
                    <Grid item xs={12}  ><MultilineTextFields/></Grid>
                    
                </Grid>
            </Grid>
            
       
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button autoFocus onClick={handleClose} color="primary" style={{backgroundColor: "#0067E2", color: "white"}}>
            ASSIGN TO FACTORY
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
