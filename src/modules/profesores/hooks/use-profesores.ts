import { useMutation, useQuery } from "@tanstack/react-query"
import { getAllProfesoresAction } from "../actions/get-all-profesores.actions"
import { createProfesorAction } from "../actions/create-profesor.action";
import { deleteProfesorAction } from "../actions/delete-profesor.action";


export const useProfesores = () => {
  
  const getProfesoresQuery = useQuery({
    queryKey: ['profesores'],
    queryFn: getAllProfesoresAction,
    staleTime: 1000 * 60 * 5
  });


  const createProfesorMutation = useMutation({
    mutationFn: createProfesorAction,
    onSuccess: () => {
      getProfesoresQuery.refetch();
    }
  });

  const deleteProfesorMutation = useMutation({
    mutationFn: deleteProfesorAction,
    onSuccess: () => {
      getProfesoresQuery.refetch();
    }
  });


  return {
    getProfesoresQuery,
    createProfesorMutation,
    deleteProfesorMutation
  }
}