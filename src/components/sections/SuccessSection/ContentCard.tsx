import styled from "@emotion/styled";
import Image from "next/image";

interface ContentCardProps {
  cardItem: {
    heading: string;
    text: string;
    imageUrl: string; 
  };
}



export default function ContentCard ({cardItem}: ContentCardProps){
    const {heading,text, imageUrl} = cardItem

    const CardBlock = styled.div`
    width:312px;
    height:312px;
    background:#1F2C3D;
    border-radius:20px;
    padding: 28px 24px 39px 24px;
    text-align:center;
    `

    const CardHeading = styled.h3`
    padding: 23px 0;
    font-size:20px;
    `

    const CardText = styled.p`
    font-size:14px;
    line-height:170%;
    `

    return(
        <CardBlock>
            <Image width={79} height={79} src={imageUrl} alt="fdg" />
            <CardHeading>{heading}</CardHeading>
            <CardText>{text}</CardText>
        </CardBlock>
        
    )

}