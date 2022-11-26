export interface IGetAllFilms {
    size: number;
    total: number;
    pages: number;
    data: IFilm[];
}

export interface IFilm {
    _id: String;
    title: String;
    film_banner: String;
    description: String;
    director: String;
    producer: String;
    refId: String;
}