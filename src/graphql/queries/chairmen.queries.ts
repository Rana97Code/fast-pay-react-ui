import { gql } from "@apollo/client";

export const GET_CHAIRMAN = gql`
  query getChairmen {
    getChairmen {
      id
      name
      designation
      qualifications
      bio
      profileImage
      qualificationImage
    }
  }
`;
