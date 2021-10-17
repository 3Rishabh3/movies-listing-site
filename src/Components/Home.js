import React, { useContext } from "react";

import UserContext from "../Contexts/UserContext";
import requests from "../Services/requests";
import Favourites from "./Favourites";
import Row from "./Row";
import "./Home.css";

const Home = () => {
  const context = useContext(UserContext);

  return (
    <div className="home">
      <Row
        title="NETFLIX ORIGINALS"
        url={requests.fetchNetflixOriginals}
        isRowLarge
      />

      <div className="moviesNavTab">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-Favourites-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Favourites"
              type="button"
              role="tab"
              aria-controls="nav-Favourites"
              aria-selected="true"
            >
              Favourites <i className="far fa-heart"></i>
            </button>
            <button
              className="nav-link "
              id="nav-Trending-tab "
              data-bs-toggle="tab"
              data-bs-target="#nav-Trending"
              type="button"
              role="tab"
              aria-controls="nav-Trending"
              aria-selected="false"
            >
              Trending
            </button>
            <button
              className="nav-link"
              id="nav-Top-Rated-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Top-Rated"
              type="button"
              role="tab"
              aria-controls="nav-Top-Rated"
              aria-selected="false"
            >
              Top Rated
            </button>
            <button
              className="nav-link"
              id="nav-Action-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Action"
              type="button"
              role="tab"
              aria-controls="nav-Action"
              aria-selected="false"
            >
              Action Movies
            </button>
            <button
              className="nav-link"
              id="nav-Comedy-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Comedy"
              type="button"
              role="tab"
              aria-controls="nav-Comedy"
              aria-selected="false"
            >
              Comedy
            </button>
            <button
              className="nav-link"
              id="nav-Horror-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Horror"
              type="button"
              role="tab"
              aria-controls="nav-Horror"
              aria-selected="false"
            >
              Horror
            </button>
            <button
              className="nav-link"
              id="nav-Romance-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Romance"
              type="button"
              role="tab"
              aria-controls="nav-Romance"
              aria-selected="false"
            >
              Romance
            </button>
            <button
              className="nav-link"
              id="nav-Documentries-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-Documentries"
              type="button"
              role="tab"
              aria-controls="nav-Documentries"
              aria-selected="false"
            >
              Documentries
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-Favourites"
            role="tabpanel"
            aria-labelledby="nav-Favourites-tab"
          >
            <Favourites favouriteList={context.favouriteList} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-Trending"
            role="tabpanel"
            aria-labelledby="nav-Trending-tab"
          >
            <Row title="Trending" url={requests.fetchTrending} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-Top-Rated"
            role="tabpanel"
            aria-labelledby="nav-Top-Rated-tab"
          >
            <Row title="Top Rated" url={requests.fetchTopRated} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-Action"
            role="tabpanel"
            aria-labelledby="nav-Action-tab"
          >
            <Row title="Action Movies" url={requests.fetchActionMovies} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-Comedy"
            role="tabpanel"
            aria-labelledby="nav-Comedy-tab"
          >
            <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-Horror"
            role="tabpanel"
            aria-labelledby="nav-Horror-tab"
          >
            <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-Romance"
            role="tabpanel"
            aria-labelledby="nav-Romance-tab"
          >
            <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-Documentries"
            role="tabpanel"
            aria-labelledby="nav-Documentries-tab"
          >
            <Row title="Documentries" url={requests.fetchDocumentries} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
