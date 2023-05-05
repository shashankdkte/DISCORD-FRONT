import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import RedirectInfo from "../../shared/components/RedirectInfo";

const getFormNotValidMessage = () => {
  return "Enter correct email address and password";
};
const getFormValidMessage = () => {
  return "Press to Log In";
};
const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate("/register");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      ></RedirectInfo>
    </>
  );
};

export default LoginPageFooter;
