import axios, { AxiosResponse } from "axios";
import { useQueries, useQuery } from "react-query";

export const pokemonApi = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ""}`, {
    params: { limit: 151 },
  });
};

export const usePokemonQueries = (names) => {
  const queries = names.map((name, idx) => ({
    queryKey: ["evolution", `${name}_${idx}`],
    queryFn: () => pokemonApi(name),
  }));

  return useQueries(queries);
};

const usePokemonQuery = (id) =>
  useQuery(id ? ["pokemon", id] : "pokemon", () => pokemonApi(id));

export default usePokemonQuery;
