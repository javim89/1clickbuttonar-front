import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../mutations/mutations";
import { GET_USERS } from "../querys/querys";
import { Button } from "@mui/material";

const ClickToWin = (): React.ReactNode => {
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    refetchQueries: [
      GET_USERS
    ]
  });

  if (loading) return <div>Submitting...</div>;
  if (error != null) return <div>Submission error! ${error.message}</div>;

  return (
    <Button variant="contained" onClick={() => {
      addUser({
        variables: {
          name: `javi react${Math.floor(Math.random() * 10)}`,
          surname: `mar react${Math.floor(Math.random() * 10)}`
        }
      }).catch((err) => {
        console.error(err);
      });
    }}>
      Click to win
    </Button>
  );
};

export default ClickToWin;
