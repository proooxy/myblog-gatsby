import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled'
import Avatar from "../Avatar";


const Profile = () => {
    const { site: { siteMetadata: { title, description, position },

    },
    } = useStaticQuery(graphql`
        query MyQueryMetadata {
            site {
                siteMetadata { 
                    title
                    position
                    description
                }
            }
        }
`)
return (
    <S.ProfileWrapper>
        <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
            {title}
            <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
        
        </S.ProfileLink>
        <S.ProfileDescription>{description}</S.ProfileDescription>
</S.ProfileWrapper>
)


}


export default Profile;