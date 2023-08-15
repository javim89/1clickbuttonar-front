import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../mutations/mutations";
import { GET_USERS } from "../querys/querys";


const ClickToWin = () => {
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    refetchQueries: [
      GET_USERS
    ]
  });

  if (loading) return <div>Submitting...</div>;
  if (error) return <div>Submission error! ${error.message}</div>;

  return(
    <button onClick={() => {
      addUser({
        variables:{
          name: `javi react${Math.floor(Math.random() * 10)}`,
          surname: `mar react${Math.floor(Math.random() * 10)}`
        }
      });
    }}>
      Click to win
    </button>
  );
};

export default ClickToWin;