import React from "react";

export const Publications = () => {
  const publicUrl = "https://scholar.google.com/citations?user=4vZlm9kAAAAJ&hl=en";
  const articleUrl = "https://medium.com/amboss/quality-engineering-70213186d4f4";

  return (
    <div className="mid-section public-section">
      <div className="public-container">
        <div className="public-header">
          <span className="circle color-red"></span>
          <span className="circle color-yellow"></span>
          <span className="circle color-green"></span>
          <p>Publications & Articles</p>
        </div>
        <ul>
          <li>
            <a href={publicUrl} target="_blank" rel="noopener noreferrer">
              Publications
            </a>
          </li>
          <li>
            <a href={articleUrl} target="_blank" rel="noopener noreferrer">
              Recoding Engineering Culture
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
