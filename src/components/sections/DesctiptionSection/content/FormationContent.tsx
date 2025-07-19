import styled from "@emotion/styled";
import Image from "next/image";

export default function FormationContent() {
  const FormationBlock = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    gap: 161px;
    text-align:left;
    margin-top:81px;
  `;

  const FormationDscription = styled.div`
    padding-top: 50px;
  `;
  const FormationHeader = styled.h2`
    line-height:130%;
  `
  const FormationText = styled.p`
   line-height:170%;
   letter-spacing:0%;
  `

  return (
    <FormationBlock>
      <Image src="/images/fantasy-ball.png" alt="ff" width={252} height={252} />
      <FormationDscription>
      <FormationHeader>Team Formation</FormationHeader>
        <FormationText>
          Choose 11 players, distributing the budget between stars and promising
          talents. It is important to find a balance between expensive top
          players and underrated players who can bring a lot of points. Dont
          forget about substitutes - they will help in case of injuries or
          disqualifications of the main players.
        </FormationText>
      </FormationDscription>
    </FormationBlock>
  );
}
