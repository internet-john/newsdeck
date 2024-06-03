import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header/Header";
import ArticleList from "./components/Article/ArticleList";
import Loader from "./components/Loader/Loader";
import { ArticleType } from "./types/Article";
import NavBar from "./components/NavBar/NavBar";
import useFetchArticlesStore from "./stores/articlesStore";

function App() {
  const {
    data,
    loading,
    error: fetchError,
    fetchData: fetchArticles,
  } = useFetchArticlesStore();

  const [currentCategory, setCurrentCategory] = useState("");
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const { isLoading: isAuthLoading } = useAuth0();

  useEffect(() => {
    fetchData();
  }, []);

  const filterArticles = (articles: ArticleType[]) =>
    articles.filter((article) => article.title !== "[Removed]");

  const fetchData = async () => {
    fetchArticles(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        import.meta.env.VITE_REACT_APP_NEWS_API_KEY
      }`
    );

    setArticles(filterArticles(data?.articles || []));
  };

  const fetchCategoryData = async (category: string) => {
    fetchArticles(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        import.meta.env.VITE_REACT_APP_NEWS_API_KEY
      }${category && category.length > 0 ? `&category=${category}` : ""}`
    );

    setArticles(filterArticles(data?.articles || []));
  };

  const handleClickCategory = (e: any) => {
    setArticles([]);

    setCurrentCategory(e.target.value);
    fetchCategoryData(e.target.value);
  };

  const fetchSearchData = async (search: string) => {
    fetchArticles(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=${
        import.meta.env.VITE_REACT_APP_NEWS_API_KEY
      }`
    );

    setArticles(filterArticles(data?.articles || []));
  };

  const content = () => {
    let contentNode = <></>;

    if (fetchError) {
      contentNode = <div>Something went wrong: {fetchError}</div>;
    } else {
      contentNode = (
        <>
          {loading || isAuthLoading ? (
            <Loader />
          ) : (
            <ArticleList articles={articles} />
          )}
        </>
      );
    }

    return contentNode;
  };

  return (
    <div id="newsdeck">
      <Header />
      <NavBar
        onSearch={fetchSearchData}
        currentCategory={currentCategory}
        onClickCategory={handleClickCategory}
      />
      <div id="newsdeck-content">{content()}</div>
    </div>
  );
}

export default App;
