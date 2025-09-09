import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router";

function ScrollToTop() {
  const location = useLocation();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (location.pathname === "/privacy" || location.pathname === "/contact")
      return;
    window.scrollTo(0, 0);
  }, [location.pathname, searchParams]);
  return null;
}
export default ScrollToTop;
