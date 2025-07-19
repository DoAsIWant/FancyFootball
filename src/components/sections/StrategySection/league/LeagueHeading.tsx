import styled from "@emotion/styled";

export default function LeagueHeading() {
  const LeagueHeader = styled.h2`
    position: relative;
    display: inline-block;
    padding-bottom: 20px;
    font-size: 26px;
    text-align: center;

    &after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background-color: #ff0055;
      border-radius: 2px;
    }
  `;
  return (
    <LeagueHeader>
      The best leagues for fantasy football
    </LeagueHeader>
  );
}
