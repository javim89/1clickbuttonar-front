import React from "react";
import { useQuery } from "@apollo/client";
import ClickToWin from "./components/ClickToWin";
import { GET_USERS } from "./querys/querys";
import LastUser from "./components/LastUser";

import "./App.css";

const ShowUsers = (): React.ReactNode => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error != null) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data.getAllUsers.map((user: UserI, index: number) => (
        <li key={index}>{user.name} {user.surname}</li>
      ))}
    </ul>
  );
};

function App (): React.ReactNode {
  return (
    <div className="App">
      <LastUser />
      <ClickToWin />
      <ShowUsers />
    </div>
  );
}

export default App;
