import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_PARTICIPANT } from "../mutations/mutations";
import { Button } from "@mui/material";

const ClickToWin = ({ gameId }: any): React.ReactNode => {
  // const [createUser, { data: userCreated, loading: loadingUserCreated, error: errorUserCreated }] = useMutation(CREATE_USER);
  const [addParticipant] = useMutation(ADD_PARTICIPANT);

  const addParticipantToGame = (): void => {
    // createUser({
    //   variables: {
    //     name: `javi react${Math.floor(Math.random() * 10)}`,
    //     surname: `mar react${Math.floor(Math.random() * 10)}`
    //   }
    // }).catch((err) => {
    //   console.error(err);
    // });
    addParticipant({
      variables: {
        id: gameId
      }
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <Button variant="contained" onClick={addParticipantToGame}>
      Click to win
    </Button>
  );
};

export default ClickToWin;
