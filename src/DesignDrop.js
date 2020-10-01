import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
const states = [
  ["Mens navy blue single suited Coat", "Design 1"],
  ["Mens navy blue single suited Coat", "Design 2"],
  ["Mens navy blue single suited Coat", "Design 3"],
    ["Mens navy blue single suited Coat", "Design 4"],
    ["Mens navy blue single suited Coat", "Design 5"],
    ["Mens navy blue single suited Coat", "Design 6"],
    ["Mens navy blue single suited Coat", "Design 7"],
    ["Mens navy blue single suited Coat", "Design 8"],
];

const StateDropDesign = ({ label, ...others }) => (
  <>
    <TextField {...others} id="outlined-select-currency"
          select
        size="small"
          variant="outlined">
      {states.map(([value, name]) => (
            <MenuItem key={value} value={value}>
                <Avatar style={{margin: "0px 10px", height: "20px", width: "20px", float: "left"}} alt="Remy Sharp" src="https://res.cloudinary.com/dajarstore/image/upload/c_fill,h_80,w_80/v1601441948/photo-1562003389-902303a38425_p7z3ru.webp"  />
              {name}
            </MenuItem>
       
      ))}
    </TextField>
  </>
);

export default StateDropDesign;
