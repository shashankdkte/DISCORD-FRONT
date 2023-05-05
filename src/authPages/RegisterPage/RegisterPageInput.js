import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = ({
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUserName,
}) => {
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="Email"
        type="text"
        placeholder="Please Enter email address"
      />

      <InputWithLabel
        value={username}
        setValue={setUserName}
        label="Username"
        type="text"
        placeholder="Enter Username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default RegisterPageInputs;
