import axios from "axios";
import { useQuery } from "react-query";

const speciesApi = (id) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

const useSpeciesQuery = (id) =>
  useQuery(["species", { id }], () => speciesApi(id));

export default useSpeciesQuery;
