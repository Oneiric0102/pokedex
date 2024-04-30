import axios from "axios";
import { useQueries } from "react-query";

const useAbilities = (abilities) => {
  const queries = abilities.map(({ ability }, idx) => ({
    queryKey: ["ability", idx],
    queryFn: () => axios.get(ability.url),
  }));

  return useQueries(queries);
};

export default useAbilities;
