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

const GET_CURRENT_GAME = gql`
  query {
    getCurrentGame {
      id
      amount
      totalClicks
    }
  }
`;

export {
  GET_USERS,
  GET_CURRENT_GAME
};
