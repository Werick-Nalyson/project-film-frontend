import api from "../api";
import { IGetAllMovies, IMovie } from "./types";

export const getAll = async ({ page }: any) => {
    const response = await api.get(`movies?page=${page}`);
  
    const movies = response.data as IGetAllMovies;
  
    return movies;
};

export const chargeMovies = async () => {
    const response = await api.get(`movies/charge-movies`);
  
    const movies = response.data as IMovie[];
  
    return movies;
};