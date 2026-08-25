import { useMutation, useQuery } from "@tanstack/react-query"
import { getAllProfesoresAction } from "../actions/get-all-profesores.actions"
import { createProfesorAction } from "../actions/create-profesor.action";


export const useProfesores = () => {
  
  const allProfesoresQuery = useQuery({
    queryKey: ['profesores'],
    queryFn: getAllProfesoresAction,
    staleTime: 1000 * 60 * 5
  });


  const createProfesorMutation = useMutation({
    mutationFn: createProfesorAction,
    onSuccess: () => {
      allProfesoresQuery.refetch();
    }
  });


  return {
    allProfesoresQuery,
    createProfesorMutation
  }
}