import styled from "@emotion/styled";
import LeagueHeading from "./LeagueHeading";
import LeaguesCardsContainer from "./LeagueCardsContainer";

const LeagueBlock = styled.div``;

export default function LeagueContent() {

  return (
    <LeagueBlock>
      <LeagueHeading/>
      <LeaguesCardsContainer/>
    </LeagueBlock>
  );
}
