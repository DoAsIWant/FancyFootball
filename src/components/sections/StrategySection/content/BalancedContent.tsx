import styled from "@emotion/styled";
import Image from "next/image";

export default function BalancedContent() {
  const FormationBlock = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    gap: 161px;
    text-align:left;
    margin-top:81px;
  `;

  const BalancedDscription = styled.div`
    padding-top: 50px;
  `;
  const BalancedHeader = styled.h2`
    line-height:130%;
  `
  const BalancedText = styled.p`
   line-height:170%;
   letter-spacing:0%;
  `

  return (
    <FormationBlock>
      <Image
        src="/images/strategic-label.png"
        alt="ff"
        width={324}
        height={293}
      />
      <BalancedDscription>
        <BalancedHeader>Team Formation</BalancedHeader>
        <BalancedText>
          It is important to combine top stars and promising players. Star
          players can bring steady points, but they are expensive, so it is
          worth complementing them with underrated players who can surprise with
          their performance.
        </BalancedText>
      </BalancedDscription>
    </FormationBlock>
  );
}
