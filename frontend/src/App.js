import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CommonOpinion from "./pages/CommonOpinion";
import FrameComponent from "./pages/FrameComponent";
import FrameComponent1 from "./pages/FrameComponent1";
import FrameComponent2 from "./pages/FrameComponent2";
import Clustering from "./pages/Clustering";
import GroupComponent from "./pages/GroupComponent";
import GroupComponent1 from "./pages/GroupComponent1";
import GroupComponent2 from "./pages/GroupComponent2";
import SearchBar from "./pages/SearchBar";
import FrameComponent3 from "./pages/FrameComponent3";
import Keywordex from "./pages/Keywordex";
import ArrowSlide from "./pages/ArrowSlide";
import KeywordAnalysis from "./pages/KeywordAnalysis";
import DetailAnalysis from "./pages/DetailAnalysis";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import ProductAnalysis from "./pages/ProductAnalysis";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  let props = {"keyword":"배송"};

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-115":
        title = "";
        metaDescription = "";
        break;
      case "/frame-114":
        title = "";
        metaDescription = "";
        break;
      case "/frame-113":
        title = "";
        metaDescription = "";
        break;
      case "/clustering":
        title = "";
        metaDescription = "";
        break;
      case "/group-8":
        title = "";
        metaDescription = "";
        break;
      case "/group-81":
        title = "";
        metaDescription = "";
        break;
      case "/group-82":
        title = "";
        metaDescription = "";
        break;
      case "/search-bar":
        title = "";
        metaDescription = "";
        break;
      case "/frame-118":
        title = "";
        metaDescription = "";
        break;
      case "/keywordex":
        title = "";
        metaDescription = "";
        break;
      case "/arrow-slide":
        title = "";
        metaDescription = "";
        break;
      case "/keyword-analysis":
        title = "";
        metaDescription = "";
        break;
      case "/detail-analysis":
        title = "";
        metaDescription = "";
        break;
      case "/product-page":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/product-analysis":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />

      <Route path="/frame-115" element={<FrameComponent />} />

      <Route path="/frame-114" element={<FrameComponent1 />} />

      <Route path="/frame-113" element={<FrameComponent2 />} />

      <Route path="/clustering" element={<Clustering />} />

      <Route path="/group-8" element={<GroupComponent />} />

      <Route path="/group-81" element={<GroupComponent1 />} />

      <Route path="/group-82" element={<GroupComponent2 />} />

      <Route path="/search-bar" element={<SearchBar />} />

      <Route path="/frame-118" element={<FrameComponent3 />} />

      <Route path="/keywordex" element={<Keywordex />} />

      <Route path="/arrow-slide" element={<ArrowSlide />} />

      <Route path="/keyword-analysis" element={<KeywordAnalysis />} />

      <Route path="/detail-analysis" element={ <DetailAnalysis props/>} />

      <Route path="/product-page" element={<ProductPage />} />

      <Route path="/common-idea" element={<CommonOpinion />} />

      <Route path="/product-analysis" element={<ProductAnalysis />} />
    </Routes>
  );
}
export default App;
