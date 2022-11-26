import {
    Container,
    ImgFilm,
    Content,
    WrapperTitleDate,
    Title,
    Description,
} from './styles'

import { IFilm } from '../../services/films/types';

interface IProps {
  film?: IFilm;
}

const CardFilm = ({ film }: IProps) => {
  return (
    <Container>
        <ImgFilm src={`${film?.film_banner}`} />

        <Content>
          <WrapperTitleDate>
            <Title>{film?.title}</Title>
          </WrapperTitleDate>

          <Description>
            {film?.description}
          </Description>
        </Content>

    </Container>
  );
};

export default CardFilm;
