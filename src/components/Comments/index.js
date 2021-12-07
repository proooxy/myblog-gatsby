import React from "react"
import { DiscussionEmbed } from 'disqus-react';
import * as S from "./styled"

const Comments = () => {

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <DiscussionEmbed
    shortname='example'
    config={
        {
            url: "https://blog-gatsby-2.disqus.com/",
            identifier: "@franciscohenriqueoliveira",
            title: "Comentario Blog",
            language: 'pt_BR' //e.g. for Traditional Chinese (Taiwan)	
        }
    }
/>
    </S.CommentsWrapper>
  )
}



export default Comments