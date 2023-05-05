import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
  color: "white",
};

const AddFriendButton = () => {
  const handleOpenFriendDialog = () => {};
  return (
    <>
      <CustomPrimaryButton
        addtionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;
