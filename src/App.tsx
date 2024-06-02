import React from "react";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header/Header";
import ArticleList from "./components/Article/ArticleList";
import Loader from "./components/Loader/Loader";
import { ArticleType } from "./types/Article";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);
  const { isLoading: isAuthLoading } = useAuth0();

  useEffect(() => {
    fetchData();
  }, []);

  const filterArticles = (articles: ArticleType[]) =>
    articles.filter((article) => article.title !== "[Removed]");

  const fetchData = async () => {
    try {
      setIsArticlesLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          import.meta.env.VITE_REACT_APP_NEWS_API_KEY
        }`
      );
      const { articles } = await response.json();

      setArticles(filterArticles(articles));
    } catch (e) {
      console.log("e", e);
    } finally {
      setIsArticlesLoading(false);
    }
  };

  const fetchCategoryData = async (category: string) => {
    try {
      setIsArticlesLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          import.meta.env.VITE_REACT_APP_NEWS_API_KEY
        }${category && category.length > 0 ? `&category=${category}` : ""}`
      );
      const { articles } = await response.json();

      setArticles(filterArticles(articles));
    } catch (e) {
      console.log("e", e);
    } finally {
      setIsArticlesLoading(false);
    }
  };

  const handleClickCategory = (e: any) => {
    setArticles([]);

    setCurrentCategory(e.target.value);
    fetchCategoryData(e.target.value);
  };

  const fetchSearchData = async (search: string) => {
    try {
      setIsArticlesLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=${
          import.meta.env.VITE_REACT_APP_NEWS_API_KEY
        }`
      );
      const { articles } = await response.json();

      setArticles(filterArticles(articles));
    } catch (e) {
      console.log("e", e);
    } finally {
      setIsArticlesLoading(false);
    }
  };

  return (
    <div id="newsdeck">
      <Header />
      <NavBar
        onSearch={fetchSearchData}
        currentCategory={currentCategory}
        onClickCategory={handleClickCategory}
      />
      <div id="newsdeck-content">
        {isArticlesLoading || isAuthLoading ? (
          <Loader />
        ) : (
          <ArticleList articles={articles} />
        )}
      </div>
    </div>
  );
}

export default App;
