import { gql } from "@apollo/client";

export const GET_ALL_COMPANIES = gql`
  query GetAllCompanies {
    getAllCompanies {
      id
      title
      href
      logo
      description
      email
      phoneNumber
      address
    }
  }
`;