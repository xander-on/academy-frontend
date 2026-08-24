import { useQuery } from "@tanstack/react-query"
import { getAllProfesoresAction } from "../actions/get-all-profesores.actions"


export const useProfesores = () => {
  
  const allProfesoresQuery = useQuery({
    queryKey: ['profesores'],
    queryFn: getAllProfesoresAction,
    staleTime: 1000 * 60 * 5
  });


  return {
    allProfesoresQuery
  }
}