export interface IGetAllMovies {
    size: number;
    total: number;
    pages: number;
    data: IMovie[];
}

export interface IMovie {
    _id: String;
    title: String;
    movie_banner: String;
    description: String;
    director: String;
    producer: String;
    refId: String;
}