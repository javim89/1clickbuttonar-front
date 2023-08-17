import { gql } from "@apollo/client";

const CREATE_USER = gql`
  # Increments a back-end counter and gets its resulting value
  mutation ($name: String, $surname: String) {
    createUser(name: $name, surname: $surname) {
      id
      name
      surname
    }
  }
`;

const ADD_PARTICIPANT = gql`
  mutation ($id: ID) {
    addParticipant(id: $id) {
      totalClicks
      amount
      id
      targetTime
    }
  }
`;

export {
  CREATE_USER,
  ADD_PARTICIPANT
};
