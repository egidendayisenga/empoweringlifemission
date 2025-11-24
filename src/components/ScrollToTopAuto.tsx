import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTopAuto automatically scrolls the window to top
 * on every route change.
 */
const ScrollToTopAuto = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto" // instant scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopAuto;
