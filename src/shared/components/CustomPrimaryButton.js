import React from "react";
import { Button } from "@mui/material";
const CustomPrimaryButton = ({ label, addtionalStyles, disabled, onClick }) => {
  return (
    <Button
      sx={{
        bgcolor: "#5865f2",
        color: "#000",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
        marginTop: "40px",
      }}
      style={addtionalStyles ? addtionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
