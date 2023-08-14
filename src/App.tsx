import React from "react";
import { useQuery } from "@apollo/client";
import ClickToWin from "./components/ClickToWin";
import { GET_USERS } from "./querys/querys";
import LastUser from "./components/LastUser";

import "./App.css";

const ShowUsers = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data.getAllUsers.map((user: UserI) => (
        <li>{user.name} {user.surname}</li>
      ))}
    </ul>
  );
};


function App() {
  return (
    <div className="App">
      <LastUser />
      <ClickToWin />
      <ShowUsers />
    </div>
  );
}

export default App;
