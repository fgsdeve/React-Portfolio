import React from "react";
import {
  LinearProgress,
} from "@mui/material";

export default function Skills({text, value}) {
  return (
    <div>
     {text}   
      <LinearProgress variant="determinate" value={value} color="secondary" />
    </div>
  );
}
