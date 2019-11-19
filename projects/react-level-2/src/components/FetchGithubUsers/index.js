import React, { useEffect } from "react";

import useFetchData from "../../hooks/useFetchData";

export default function FetchGithubUsers({ query, children }) {
  const [{ data, loading, error }, fetchData] = useFetchData();

  useEffect(() => {
    const getUsers = () => {
      if (query) {
        fetchData(`https://api.github.com/search/users?q=${query}`);
      }
    };

    getUsers();
  }, [query, fetchData]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;

  if (!data || (data.message && data.message === "Validation Failed"))
    return null;

  if (data.message && data.message.includes("rate"))
    return <div>Rate limit reached! Please wait a little bit...</div>;

  if (data && !!data.total_count) return <div>No results for ${search}</div>;

  return children(data);
}
