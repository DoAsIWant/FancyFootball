import { useState, useEffect } from "react";

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkMobile);
    checkMobile(); // Ініціалізація

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;

}