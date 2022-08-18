import React from 'react';
/**
 *
 *
 * @param {string} url
 * @return {*} 
 */
export const useFetch = (url: string) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>();

  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    }
  }, [url]);

  React.useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url, fetchData]);

  return { data, error, isLoading };
};