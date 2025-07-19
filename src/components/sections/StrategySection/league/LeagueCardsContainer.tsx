import styled from "@emotion/styled";
import LeagueCard from "./LeagueCard";
import { leagueCards } from "@/utils/cards-data/leagueCards";
export default function LeaguesCardsContainer (){

  const LeagueContainer = styled.div`
  margin-top: 110px;
  text-align: center;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 60px;
  scrollbar-width: none;
  scroll-behavior: smooth;   
  -ms-overflow-style: none;  

  @media (max-width:768px){
    margin-top:44px;
  }
`;
    
    return (
       <LeagueContainer>
            {leagueCards.map((item,index) => {
              return <LeagueCard key={index } cardItem={item} />;
            })} 
        </LeagueContainer>    
    )
}