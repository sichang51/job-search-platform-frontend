// import { useState, useEffect } from "react";
// import axios from "axios";
// import { ArticlesIndex } from "./ArticlesIndex";

// export function Homepage() {
//   const [articles, setArticles] = useState([]);

//   const handleArticlesIndex = () => {
//     axios
//       .get(`https://newsapi.org/v2/everything?q=jobs&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
//       .then((response) => {
//         const limitedArticles = response.data.articles.slice(0, 10);
//         // console.log(response.data.articles);
//         setArticles(limitedArticles);
//         // setArticles(response.data.articles);
//       });
//   };

//   useEffect(handleArticlesIndex, []);

//   return (
//     <main>
//       <h1 className="text-3xl font-bold p-4 text-center">Job News</h1>
//       <ArticlesIndex articles={articles} />
//     </main>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";
import "./index.css"; // Import the CSS file for styling

export function Homepage() {
  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    axios
      .get(`https://newsapi.org/v2/everything?q=jobs&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then((response) => {
        const limitedArticles = response.data.articles.slice(0, 10);
        setArticles(limitedArticles);
      });
  };

  useEffect(handleArticlesIndex, []);

  return (
    <main>
      {/* First Blank Section */}
      <div className="homepage-section mb-4">
        <h2 className="hp-title">Job Hound</h2>
        <h6 className="hp-line">Providing employment solutions for everyone.</h6>
        <p className="hp-co-text">
          Wherever you are on your career journey, Job Hound makes it easier for workers and companies to find the
          perfect match.
        </p>
        <div className="divider"></div>
      </div>

      {/* Second News API Section */}
      <div className="homepage-section">
        <h2 className="text-3xl font-bold p-4 text-center">Job News</h2>
        <ArticlesIndex articles={articles} />
      </div>

      {/* Third Blank Section */}
      <div className="homepage-section mb-4">{/* Add any content or leave it empty */}</div>

      {/* Fourth Blank Section */}
      <div className="homepage-section mb-4">{/* Add any content or leave it empty */}</div>
    </main>
  );
}
