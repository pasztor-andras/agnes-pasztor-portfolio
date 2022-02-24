import React from "react";

export const Publications = () => {
  const publicOneUrl =
    "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4vZlm9kAAAAJ&citation_for_view=4vZlm9kAAAAJ:u-x6o8ySG0sC";
  const publicTwoUrl =
    "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4vZlm9kAAAAJ&citation_for_view=4vZlm9kAAAAJ:u5HHmVD_uO8C";
  const publicThreeUrl =
    "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4vZlm9kAAAAJ&citation_for_view=4vZlm9kAAAAJ:d1gkVwhDpl0C";

  const articleUrl = "https://medium.com/amboss/quality-engineering-70213186d4f4";

  return (
    <div className="mid-section public-section">
      <div className="public-container">
        <div className="public-header">
          <p>Publications & Articles</p>
        </div>
        <div className="public-text">
          <ul>
            Publications
            <li>
              <a href={publicOneUrl} target="_blank" rel="noopener noreferrer">
                Application of high-throughput next-generation sequencing for HLA typing on buccal extracted DNA: results from over 10,000 donor
                recruitment samples
              </a>
            </li>
            <li>
              <a href={publicTwoUrl} target="_blank" rel="noopener noreferrer">
                Towards a new gold standard—NGS corrections to sanger SBT genotyping results
              </a>
            </li>
            <li>
              <a href={publicThreeUrl} target="_blank" rel="noopener noreferrer">
                IMPLEMENTING ABO GENOTYPING INTO HLA SEQUENCING WORKFLOW
              </a>
            </li>
          </ul>
          <ul>
            Articles
            <li>
              <a href={articleUrl} target="_blank" rel="noopener noreferrer">
                Recoding Engineering Culture
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
