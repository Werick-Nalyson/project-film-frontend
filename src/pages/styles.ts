import styled from 'styled-components';

interface IButtonPaginationActive {
    active: boolean;
}

export const Container = styled.div`
    width: 100%;
    max-width: 1380px;
    margin: auto;
`;

export const ListLeiloes = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`;

export const ContentCard = styled.div`
    padding: 0px 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
`;

export const TitleFilm = styled.h2`
    font-size: 1.4rem;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const WrapperPagination = styled.div`
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Pagination = styled.div`

`;

export const ButtonReload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50px;
    background-color: #3F3F3F;
    cursor: pointer;
`;

export const ButtonPagination = styled.button<IButtonPaginationActive>`
    background-color: ${({ active }) => active ? '#E73F3F' : '#FAB07B'};
    color: ${({ active }) => active ? '#FFF' : '#333'};
    padding: 15px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;

    & + & {
        margin-left: 10px;
    }
`