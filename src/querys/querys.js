import { gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    getAllUsers {
      id
      name
      surname
    }
  }
`;

export {
  GET_USERS
};
