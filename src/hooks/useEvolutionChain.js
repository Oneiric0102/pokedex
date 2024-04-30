import axios from "axios";
import { useQuery } from "react-query";

const useEvolutionChain = (url) =>
  useQuery(["evolution", { url }], () => (url ? axios.get(url) : null));

export default useEvolutionChain;
