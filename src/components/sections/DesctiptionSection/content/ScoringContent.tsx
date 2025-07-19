import styled from "@emotion/styled";
import Image from "next/image";

export default function ScoringContent() {

  const ScoringBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    gap: 80px;
    text-align: left;
    margin-top: 81px;
  `;

  const ScoringDescription = styled.div`
    padding-top: 50px;
  `;

  const ScrolingHeader = styled.h2`
    line-height: 130%;
  `;
  const ScrollingText = styled.p`
    line-height: 170%;
    letter-spacing: 0%;
  `;

  return (
    <ScoringBlock>
      <ScoringDescription>
        <ScrolingHeader>Scoring</ScrolingHeader>
        <ScrollingText>
          Earn points for goals, assists, clean sheets, and other player
          performance in real matches. Points can also be awarded for goalkeeper
          saves, interceptions, and even successful dribbles. At the same time,
          players can lose points for conceding goals, receiving cards, or
          missing penalties.
        </ScrollingText>
      </ScoringDescription>

      <Image src="/images/fantasy-ball.png" alt="ff" width={252} height={252} />
    </ScoringBlock>
  );
}
