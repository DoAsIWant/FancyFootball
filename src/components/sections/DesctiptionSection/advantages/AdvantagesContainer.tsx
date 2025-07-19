import styled from "@emotion/styled"
import AdvantageCard from "./AdvantageCard"
import { useIsMobile } from "@/hooks/useWindowSize"
import ButtonLarge from "@/ui/buttons/ButtonLarge"
import { advantageCards } from "@/utils/cards-data/advantageCards"

const AdvantagesContent = styled.div`
    margin-top:137px;
    text-align:center;

    @media (max-width:768px){
        margin-top:1px;
    }
`
export default function AdvantagesContainer() {

    const isMobile = useIsMobile();

    return (
        <AdvantagesContent>
            {advantageCards.map((item,index)=>{
                return <AdvantageCard key={index } cardItem={item}/>
            })}

            {isMobile ? <ButtonLarge>START YOUR JOURNEY</ButtonLarge>:null}
        </AdvantagesContent>
    )
}

