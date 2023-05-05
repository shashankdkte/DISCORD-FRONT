import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import RedirectInfo from "../../shared/components/RedirectInfo";

const getFormNotValidMessage = () => {
  return "Enter correct email address ,username and password";
};
const getFormValidMessage = () => {
  return "Press to Register";
};
const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToLoginPage = () => {
    navigate("/login");
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "15px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account? "
        additionalStyles={{ marginTop: "5px", marginBottom: "10px" }}
        redirectHandler={handlePushToLoginPage}
      ></RedirectInfo>
    </>
  );
};

export default RegisterPageFooter;
