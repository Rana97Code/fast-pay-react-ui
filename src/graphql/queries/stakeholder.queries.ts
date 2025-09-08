import { gql } from "@apollo/client";

export const GET_ALL_STAKEHOLDERS = gql`
  query GetAllStakeholders {
    getAllStakeholders {
    id
    name
    position
    bio
    image
    notableWorks
  }
}
`;