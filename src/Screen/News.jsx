import React, { useState, useEffect } from 'react';
import './News.css';

const articles = [
  {
    title: "McDonald's Introduces New Menu Items",
    content: "McDonald's has announced the launch of several new menu items, including a new spicy chicken sandwich and a line of gourmet coffees.",
    date: "June 28, 2024",
    image: 'https://via.placeholder.com/800x400?text=New+Menu+Items'
  },
  {
    title: "McDonald's Sustainability Efforts",
    content: "As part of its ongoing sustainability efforts, McDonald's is rolling out eco-friendly packaging and reducing plastic usage across its outlets.",
    date: "June 27, 2024",
    image: 'https://via.placeholder.com/800x400?text=Sustainability+Efforts'
  },
  {
    title: "McDonald's Opens New Flagship Store",
    content: "A new McDonald's flagship store has opened in downtown Chicago, featuring state-of-the-art technology and a modern design.",
    date: "June 26, 2024",
    image: 'https://via.placeholder.com/800x400?text=New+Flagship+Store'
  },
];

const News = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000); // Simulating a fetch delay
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="news-container">
      <div className={`animated-background ${loaded ? 'loaded' : ''}`}></div>
      <div className={`news-content ${loaded ? 'show-content' : ''}`}>
        <h1 className="news-title">Latest News</h1>
        {selectedArticle ? (
          <div className="news-article-detail">
            <button className="close-button" onClick={handleCloseArticle}>X</button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="article-image" />
            <h2 className="article-title">{selectedArticle.title}</h2>
            <p className="article-content">{selectedArticle.content}</p>
            <p className="article-date">{selectedArticle.date}</p>
          </div>
        ) : (
          articles.map((article, index) => (
            <div key={index} className="news-article" onClick={() => handleArticleClick(article)}>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-content">{article.content}</p>
              <p className="article-date">{article.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
