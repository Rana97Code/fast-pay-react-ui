import { gql } from "@apollo/client";

export const GET_MANAGING_DIRECTOR = gql`
  query GetManagingDirector {
    getManagingDirector {
    id
    name
    designation
    bio
    achievements
    image
  }
}
`;