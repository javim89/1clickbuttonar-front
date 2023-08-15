import React from "react";
import { useSubscription } from "@apollo/client";
import { LAST_USER } from "../subscriptions/subscriptions";

const LastUser = () => {
 
  const { data, loading } = useSubscription(LAST_USER);

  return (
    <h2>
      {loading ? "cargando" : data.lastUser.surname}
    </h2>
  );
};

export default LastUser;