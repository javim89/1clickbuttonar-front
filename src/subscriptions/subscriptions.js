import { gql } from "@apollo/client";

const LAST_USER = gql`
  subscription {
    lastUser {
    name,
    surname,
    id
    }
  }
`;

export {
  LAST_USER
}