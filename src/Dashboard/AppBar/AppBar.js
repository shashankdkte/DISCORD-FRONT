import React from "react";
import { styled } from "@mui/system";
const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  width: "calc(100% - 326px)",
  height: "48px",
  borderBottom: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
  backgroundColor: "#36393f",
});
const AppBar = () => {
  return <MainContainer></MainContainer>;
};

export default AppBar;
