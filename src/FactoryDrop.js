import React from "react";

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
const states = [
  ["Amaya Creations", "Amaya Creations"],
  ["Amaya Creations", "Amaya Creations"],
    ["Amaya Creations", "Amaya Creations"],
    ["Amaya Creations", "Amaya Creations"],
    ["Amaya Creations", "Amaya Creations"],
  ["Amaya Creations", "Amaya Creations"]
];

const StateDrop = ({ label, ...others }) => (
  <>
    <TextField  {...others} id="outlined-select-currency"
          select
        size="small"
        placeholder="Select Factory"
          variant="outlined">
      {states.map(([value, name]) => (
        <MenuItem key={value} value={value}>
              {name}
            </MenuItem>
      ))}
    </TextField>
  </>
);

export default StateDrop;
