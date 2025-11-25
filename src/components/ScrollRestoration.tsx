import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component saves and restores scroll positions when navigating
const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollPositions: { [key: string]: number } = {};

    // Save current scroll position before leaving
    const saveScrollPosition = () => {
      scrollPositions[location.pathname] = window.scrollY;
    };

    // Restore scroll position or scroll to top
    const restoreScrollPosition = () => {
      if (location.state && (location.state as any).scrollToTop) {
        window.scrollTo(0, 0);
      } else if (scrollPositions[location.pathname]) {
        window.scrollTo(0, scrollPositions[location.pathname]);
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Save scroll position when component unmounts
    window.addEventListener("beforeunload", saveScrollPosition);
    
    // Restore position after navigation
    restoreScrollPosition();

    return () => {
      saveScrollPosition();
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [location]);

  return null;
};

export default ScrollRestoration;
