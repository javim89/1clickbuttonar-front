import React from "react";
import { useQuery, gql } from "@apollo/client";

import "./App.css";

const GET_USERS = gql`
  query {
    getAllUsers {
      id
      name
      surname
    }
  }
`;

const ShowUsers = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getAllUsers.map((user: UserI) => <span>{user.surname}</span>);
};
function App() {
  return (
    <div className="App">
      <ShowUsers />
    </div>
  );
}

export default App;
