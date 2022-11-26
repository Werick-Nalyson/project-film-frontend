import Header from "../components/Header";

import CardFilm from "../components/CardFilm";
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
import * as FilmsService from "../services/films";
import { IFilm } from "../services/films/types";
import { history } from "../history";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams();
  const [films, setFilms] = useState<IFilm[]>([])
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1)
  const [pages, setPages] = useState<number[]>([])
  
  useEffect(() => {
    loadFilms()
  }, [currentPage])

  function handleChangePage (page: number) {
    setCurrentPage(page)
    history.push({
      search: `?page=${page}`
    })
  }

  async function loadFilms () {
    const { data, pages  } = await FilmsService.getAll({
      page: currentPage
    });

    setPages(Array(pages).fill(0).map((v, i) => i+1))
    setFilms(data)
  }

  async function handleChargeFilms () {
    await FilmsService.chargeFilms();

    await loadFilms()
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

          <ButtonReload onClick={handleChargeFilms}>
            <IoReloadOutline color="#FFF" size={25} />
          </ButtonReload>
        </WrapperPagination>

        <ContentCard>
          {films.map((item) => (
            <CardFilm key={item._id.toString()} film={item} />
          ))}
        </ContentCard>
      </Container>
    </>
  );
}

export default App;
