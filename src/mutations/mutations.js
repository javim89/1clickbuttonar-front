import { gql } from "@apollo/client";

const ADD_USER = gql`
  # Increments a back-end counter and gets its resulting value
  mutation ($name: String, $surname: String) {
    addUser(name: $name, surname: $surname) {
      id
      name
      surname
    }
  }
`;

export {
  ADD_USER
}