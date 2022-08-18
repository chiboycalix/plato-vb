import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
/**
 *
 *
 * @param {string} pathname
 * @param {string} navigateTo
 */
export const useRoute = (pathname: string, navigateTo: string) => {
  let navigate = useNavigate();
  let location = useLocation();

  React.useEffect(() => {
    if (location.pathname === pathname) {
      navigate(navigateTo);
    }
  }, [navigateTo, pathname, navigate, location]);
};