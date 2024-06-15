import React, { useEffect, useState } from "react";

const NewsData = (category, searchTerm) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);
        const apiKey = process.env.REACT_APP_GNEWS_API_KEY;
        const apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en`;
        const categoryParameter = category ? `&topic=${category}` : "";
        const searchParameter = searchTerm ? `&q=${searchTerm}` : "";
        const url = apiUrl + categoryParameter + searchParameter;

        const response = await fetch(url);
        const data = await response.json();
        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchNewsData();
  }, [category, searchTerm]); // Dependency array

  return { newsData, loading, error };
};

export default NewsData;
