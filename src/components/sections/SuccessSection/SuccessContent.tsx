import styled from "@emotion/styled";
import ContentCard from "./ContentCard";
import Image from "next/image";
import { successCards } from "@/utils/cards-data/successCards";

export default function SuccessContent() {
  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
    width: 100%;
  `;
  const ContentCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 50px;
    align-content:center;
    justify-content:center;
  `;

  return (
    <ContentWrapper>
      <Image
        src="/images/voleyball-player.png"
        width={444}
        height={906}
        alt="f"
      />
      <ContentCards>
        {successCards.map((item,index) => {
          return <ContentCard key={index } cardItem={item} />;
        })}
      </ContentCards>
    </ContentWrapper>
  );
}
