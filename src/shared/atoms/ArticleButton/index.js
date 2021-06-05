import React from "react";

const ArticleButton = ({ onOpenArticle, type, text }) => (
  <li>
    <button
      onClick={() => {
        onOpenArticle(type);
      }}
    >
      {text}
    </button>
  </li>
);

export default ArticleButton;
