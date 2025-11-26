import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Global storage for scroll positions
const scrollPositions = new Map<string, number>();

const ScrollRestoration = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    // Save scroll position of previous page before navigating away
    if (previousPath.current !== location.pathname) {
      scrollPositions.set(previousPath.current, window.scrollY);
    }

    // Restore scroll position or scroll to top after a short delay
    const restoreScroll = () => {
      const savedPosition = scrollPositions.get(location.pathname);
      
      if (savedPosition !== undefined) {
        // Restore saved position (back button case)
        requestAnimationFrame(() => {
          window.scrollTo(0, savedPosition);
        });
      } else {
        // New page navigation - scroll to top
        window.scrollTo(0, 0);
      }
    };

    restoreScroll();
    previousPath.current = location.pathname;
  }, [location.pathname]);

  return null;
};

export default ScrollRestoration;
