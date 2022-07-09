import { useEffect, useRef } from "react";

export const useOutsideClick = ({
  handleCloseArticle,
  isArticleVisible,
  setLoading,
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        console.log("click outside");
        if (isArticleVisible) {
          handleCloseArticle();
        }
      }
    };

    const timeoutId = setTimeout(() => {
      setLoading("");
    }, 1000);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseArticle, isArticleVisible, setLoading]);

  return { wrapperRef };
};
