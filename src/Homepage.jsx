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
import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";
import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";
import "./index.css"; // Import the CSS file for styling

export function Homepage() {
  const [articles, setArticles] = useState([]);

  // Define the handleArticleClick function
  const handleArticleClick = (article) => {
    // Perform actions when article is clicked
    window.open(article.url, "_blank"); // Open the article link in a new tab
  };

  const handleArticlesIndex = () => {
    axios
      .get(`https://newsapi.org/v2/everything?q=jobs&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then((response) => {
        const limitedArticles = response.data.articles.slice(0, 12);
        setArticles(limitedArticles);
      });
  };

  useEffect(handleArticlesIndex, []);

  return (
    <main>
      {/* Big Blue Header Section */}
      <CSSTransition in={true} timeout={500} classNames="animated-up" appear>
        <div className="big-blue-header">
          <div className="slider_btn"></div>
        </div>
      </CSSTransition>

      {/* Header Component */}
      {/* First Blank Section */}
      <CSSTransition in={true} timeout={500} classNames="animated-up" appear>
        <div className="homepage-section-1 mb-4 pt-4 pb-4">
          <h2 className="hp-title"></h2>
          <h4 className="hp-line">
            <b>Providing employment solutions for everyone.</b>
          </h4>
          <p className="hp-co-text">
            <b>
              Wherever you are on your career journey, Job Hound makes it easier for workers and companies to find the
              perfect match.
            </b>
          </p>
          <div className="workers-image-container">
            <img
              src="https://www.pngplay.com/wp-content/uploads/6/Employment-Background-PNG-Image.png"
              alt=""
              className="workers-image"
            />
          </div>
          <div className="upload-resume-container">
            <button className="upload-resume-button">
              <a href="#" className="boxed-btn3">
                <b>Upload your Resume</b>
              </a>
            </button>
          </div>
        </div>
      </CSSTransition>

      {/* Second Blank Section with Bootstrap grid */}
      <CSSTransition in={true} timeout={500} classNames="animated-up" appear>
        <div className="homepage-section-2-content container">
          <div className="row">
            <div className="col-md-6">
              {/* Left Column */}
              <div className="homepage-section-2-left">
                <h2 className="hp-second-section-text">
                  Manage your entire process, from finding jobs, placement and management
                </h2>
                <div className="hp-second-content-container">
                  <div className="hp-second-image-left">
                    <img
                      src="https://www.pngmart.com/files/About-Us-Download-PNG-Image.png"
                      alt=""
                      className="second-section-img"
                    />
                    <div className="hp-second-left-text-container">
                      <div className="hp-second-text-header">
                        <p className="hp-findandsave">Find & Save</p>
                        <p className="hp-left-subheader">Find the best career, in half the time</p>
                        <p className="hp-left-text">
                          Fill your pipeline quickly with one-click job postings to multiple websites and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              {/* Right Column */}
              <div className="homepage-section-2-right">
                <img
                  src="https://png.pngtree.com/png-clipart/20220726/original/pngtree-team-work-meeting-illustration-image-png-image_8416291.png"
                  alt=""
                  className="second-section-img-right"
                />
                <div className="hp-second-left-text-container">
                  <div className="hp-second-text-header-right">
                    <p className="hp-evalcol">Evaluate & Collaborate</p>
                    <p className="hp-right-subheader">Move the right jobs forward</p>

                    <p className="hp-right-text">Decide who's best in this all in one recruiting system.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>

      {/* Third News API Section */}
      <div className="homepage-section mb-4">
        <h2 className="text-3xl font-bold p-4 text-center">
          <b className="job-news-title">Job News</b>
        </h2>

        <div className="card-container d-flex justify-content-center">
          {articles.map((article) => (
            <div key={article.title} className="card small-card">
              <img src={article.urlToImage} alt={article.title} className="card-img-top" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <button onClick={() => handleArticleClick(article)} className="btn btn-secondary">
                  <b>Read More</b>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Blank Section */}
      <CSSTransition in={true} timeout={500} classNames="animated-up" appear>
        <div className="homepage-section mb-4">{/* Add any content or leave it empty */}</div>
      </CSSTransition>
    </main>
  );
}
