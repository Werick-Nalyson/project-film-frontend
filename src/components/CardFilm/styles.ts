import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #FFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 20px;
`;

export const Content = styled.div`
    width: 100%;
    padding: 0px 20px 20px 20px;
`;

export const ImgFilm = styled.img`
    width: 100%;
`;

export const WrapperTitleDate = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const Title = styled.h3`
    padding: 20px 0px;
    font-size: 1.4rem;
`;

export const Date = styled.span`
    margin-bottom: auto;
    font-size: 0.8rem;
`;

export const Description = styled.p`
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;
