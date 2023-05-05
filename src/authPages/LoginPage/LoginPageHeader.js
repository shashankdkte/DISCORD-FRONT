import React from "react";
import { Typography } from "@mui/material";

function LoginPageHeader() {
  return (
    <>
      <Typography variant="h5" sx={{ color: "#ffffff" }}>
        Welcome Back
      </Typography>
      <Typography sx={{ color: "#99aab5" }}>
        We are happy that you are with us
      </Typography>
    </>
  );
}

export default LoginPageHeader;
