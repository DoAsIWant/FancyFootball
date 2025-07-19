import styled from "@emotion/styled";
import Image from "next/image";

export default function TransferContent() {
  const TransferBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    gap: 80px;
    text-align: left;
    margin-top: 81px;
  `;

  const TransferDescription = styled.div`
    padding-top: 50px;
  `;

  const TransferHeader = styled.h2`
    line-height: 130%;
  `;
  const TransferText = styled.p`
    line-height: 170%;
    letter-spacing: 0%;
  `;

  return (
    <TransferBlock>
      <TransferDescription>
        <TransferHeader>Scoring</TransferHeader>
        <TransferText>
          Use substitutions wisely and choose your captain strategically. Keep
          track of players form, injuries, suspensions, and changes in team
          lineups on a weekly basis. Dont keep players who have lost game
          practice in the lineup.
        </TransferText>
      </TransferDescription>

      <Image
        src="/images/strategic-label.png"
        alt="ff"
        width={324}
        height={293}
      />
    </TransferBlock>
  );
}
