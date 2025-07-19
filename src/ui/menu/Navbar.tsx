'use client'

import { useIsMobile } from "@/hooks/useWindowSize";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";


export default function Navbar(){
    const isMobile = useIsMobile();
    
    return( isMobile ? <NavbarMobile/> : <NavbarDesktop/>)
}