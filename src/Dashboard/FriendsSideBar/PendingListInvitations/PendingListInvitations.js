import React from "react";
import { styled } from "@mui/system";
import PendingInvitationListItem from "./PendingInvitationListItem";
const DUMMY_INVATIONS = [
  {
    _id: "1",
    senderId: {
      username: "Harry",
      mail: "harry@dg.com",
    },
  },
  {
    _id: "2",
    senderId: {
      username: "Polly",
      mail: "polly@dg.com",
    },
  },
  // {
  //   _id: "3",
  //   senderId: {
  //     username: "JugHead",
  //     mail: "Jug@dg.com",
  //   },
  // },
  // {
  //   _id: "4",
  //   senderId: {
  //     username: "Vannesa",
  //     mail: "vans@dg.com",
  //   },
  // },
];
const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingListInvitations = () => {
  return (
    <MainContainer>
      {DUMMY_INVATIONS.map((invitation) => (
        <PendingInvitationListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

export default PendingListInvitations;
