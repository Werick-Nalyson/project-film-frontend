import {
    Container,
    ImgFilm,
    Content,
    WrapperTitleDate,
    Title,
    Description,
} from './styles'

import { IMovie } from '../../services/movies/types';

interface IProps {
  movie?: IMovie;
}

const CardMovie = ({ movie }: IProps) => {
  return (
    <Container>
        <ImgFilm src={`${movie?.movie_banner}`} />

        <Content>
          <WrapperTitleDate>
            <Title>{movie?.title}</Title>
          </WrapperTitleDate>

          <Description>
            {movie?.description}
          </Description>
        </Content>

    </Container>
  );
};

export default CardMovie;
