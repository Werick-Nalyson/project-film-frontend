import api from "../api";
import { IGetAllFilms, IFilm } from "./types";

export const getAll = async ({ page }: any) => {
    const response = await api.get(`films?page=${page}`);
  
    const films = response.data as IGetAllFilms;
  
    return films;
};

export const chargeFilms = async () => {
    const response = await api.get(`films/charge-films`);
  
    const films = response.data as IFilm[];
  
    return films;
};