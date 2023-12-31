import { useState, useEffect } from "react";
import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";

export function Homepage() {
  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    axios
      .get(`http://newsapi.org/v2/everything?q=jobs&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then((response) => {
        const limitedArticles = response.data.articles.slice(0, 5);
        // console.log(response.data.articles);
        setArticles(limitedArticles);
        // setArticles(response.data.articles);
      });
  };

  useEffect(handleArticlesIndex, []);

  return (
    <main>
      <h1 className="text-3xl font-bold p-4 text-center">Job News</h1>
      <ArticlesIndex articles={articles} />
    </main>
  );
}

// IndeedIframe
// import React from "react";

// const Homepage = () => {
//   return <iframe title="Indeed Jobs" src="https://www.indeed.com/" width="100%" height="600px" frameBorder="0" />;
// };

// export default Homepage;
