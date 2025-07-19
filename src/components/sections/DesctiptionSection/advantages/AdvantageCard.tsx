import { useIsMobile } from "@/hooks/useWindowSize";
import ButtonLarge from "@/ui/buttons/ButtonLarge";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

interface AdvantageCardProps {
  cardItem: {
    number: string;
    text: string;
    imageUrl: string; 
  };
}

export default function AdvantageCard({cardItem}: AdvantageCardProps) {
 const theme = useTheme()
 const { number, imageUrl, text } = cardItem;

 const isMobile = useIsMobile();

  const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 27px;
  align-items: center;
  justify-content:center;
  border-top: 1px solid #FFFFFF;
  padding:30px 0;
`;
const CardItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    gap:30px;
  }
`;
const ItemNumber = styled.span`
  font-size: 80px;
  font-family: ${theme.fonts.heading};

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;
const ItemText = styled.p`
  line-height: 120%;
  font-size: 14px;
  text-transform: uppercase;
  text-align: left;
  font-family: ${theme.fonts.heading};

  @media (max-width:768px) {
      font-size: 11px;
  }
`;

 
  return (
    <Card>
      <CardItems>
        <ItemNumber>{number}</ItemNumber>
        <Image width={65} height={65} src={imageUrl} alt="fdg"  />
        <ItemText>{text}</ItemText>
      </CardItems>

    {!isMobile ? <ButtonLarge>Start your Journey</ButtonLarge> : null}
    </Card>
  );
}
