import { gql } from "@apollo/client";

export const GET_SITE_SETTINGS_QUERY = gql`
  query GetSiteSettings {
    getSiteSettings {
    id 
    phoneNumber 
    address 
    footerText 
    footerSubText 
    footerImage 
    logo 
    facebook 
    instagram 
    youtube 
    linkedin 
    createdAt 
  }
}
`;
