

import styled from "@emotion/styled";
import Image from "next/image";

interface ContentCardProps {
  cardItem: {
    heading: string;
    text: string;
    imageUrl: string; 
  };
}

export default function LeagueCard ({cardItem}: ContentCardProps){
    const {heading,text, imageUrl} = cardItem

    const CardBlock = styled.div`
    width:300px;
    height:300px;
    background:#17233399;
    border-radius:20px;
    padding: 34px 20px 54px;
    text-align:center;
    flex: 0 0 auto; 
    `

    const CardHeading = styled.h3`
    padding: 14px 0;
    font-size:16px;
    `

    const CardParagraph = styled.p`
    font-size:14px;
    line-height:170%;
    `

    return(
        <CardBlock>
            <Image width={79} height={79} src={imageUrl} alt="" />
            <CardHeading>{heading}</CardHeading>
            <CardParagraph>{text}</CardParagraph>
        </CardBlock>
        
    )

}
