import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header/Header";
import ArticleList from "./components/Article/ArticleList";
import Loader from "./components/Loader/Loader";
import NavBar from "./components/NavBar/NavBar";
import useFetchArticlesStore from "./stores/articlesStore";
import useViewStore, { Views } from "./stores/viewStore";
import BookmarksList from "./components/Bookmarks/BookmarksList";

function App() {
  const {
    loading,
    error: fetchError,
    fetchData: fetchArticles,
  } = useFetchArticlesStore();
  const { currentView, viewArticles } = useViewStore();
  const [currentCategory, setCurrentCategory] = useState("");
  const { isLoading: isAuthLoading } = useAuth0();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetchArticles(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        import.meta.env.VITE_REACT_APP_NEWS_API_KEY
      }`
    );

    viewArticles();
  };

  const fetchCategoryData = async (category: string) => {
    fetchArticles(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        import.meta.env.VITE_REACT_APP_NEWS_API_KEY
      }${category && category.length > 0 ? `&category=${category}` : ""}`
    );

    viewArticles();
  };

  const handleClickCategory = (e: any) => {
    setCurrentCategory(e.target.value);
    fetchCategoryData(e.target.value);
  };

  const fetchSearchData = async (search: string) => {
    fetchArticles(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=${
        import.meta.env.VITE_REACT_APP_NEWS_API_KEY
      }`
    );

    viewArticles();
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
          ) : currentView === Views.ARTICLES ? (
            <ArticleList />
          ) : (
            <BookmarksList />
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
      <div id="newsdeck__content">{content()}</div>
    </div>
  );
}

export default App;
