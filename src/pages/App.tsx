import Header from "../components/Header";

import CardMovie from "../components/CardMovie";
import {
  ListLeiloes,
  TitleFilm,
  ContentCard,
  Container,
  WrapperPagination,
  Pagination,
  ButtonReload,
  ButtonPagination
} from "./styles";

import { IoReloadOutline } from 'react-icons/io5'
import { useEffect, useState } from "react";
import * as MoviesService from "../services/movies";
import { IMovie } from "../services/movies/types";
import { history } from "../history";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<IMovie[]>([])
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1)
  const [pages, setPages] = useState<number[]>([])
  
  useEffect(() => {
    loadMovies()
  }, [currentPage])

  function handleChangePage (page: number) {
    setCurrentPage(page)
    history.push({
      search: `?page=${page}`
    })
  }

  async function loadMovies () {
    const { data, pages  } = await MoviesService.getAll({
      page: currentPage
    });

    setPages(Array(pages).fill(0).map((v, i) => i+1))
    setMovies(data)
  }

  async function handleChargeMovies () {
    await MoviesService.chargeMovies();

    await loadMovies()
  }

  return (
    <>
      <Header />

      <Container>
        <ListLeiloes>
          <TitleFilm>Filmes</TitleFilm>
        </ListLeiloes>

        <WrapperPagination>
          <Pagination>
            <div>
              {pages.map((item) => (
                <ButtonPagination key={(item * Math.random() * 100).toString()} active={currentPage === item} onClick={() => handleChangePage(item)}>{item}</ButtonPagination>
              ))}
            </div>
          </Pagination>

          <ButtonReload onClick={handleChargeMovies}>
            <IoReloadOutline color="#FFF" size={25} />
          </ButtonReload>
        </WrapperPagination>

        <ContentCard>
          {movies.map((item) => (
            <CardMovie key={item._id.toString()} movie={item} />
          ))}
        </ContentCard>
      </Container>
    </>
  );
}

export default App;
