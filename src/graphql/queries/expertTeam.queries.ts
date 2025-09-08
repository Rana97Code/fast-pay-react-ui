import { gql } from "@apollo/client";

export const GET_ALL_EXPERT_TEAM = gql`
  query GetAllExpertTeam {
    getAllExpertTeam {
      id
      name
      role
      bio
      image
    }
  }
`;