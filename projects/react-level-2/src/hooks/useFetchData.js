import { useState, useEffect } from "react";

export default function useFetchData(initialUrl) {
  const [url, setUrl] = useState(initialUrl || null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelFetch = false;

    const fetchData = async () => {
      if (url) {
        setError(false);
        setLoading(true);

        try {
          const res = await fetch(url);
          const data = await res.json();

          if (!cancelFetch) {
            setData(data);
          }
        } catch (e) {
          if (!cancelFetch) {
            setError(e);
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelFetch = true;
    };
  }, [url]);

  return [{ data, loading, error }, setUrl];
}
