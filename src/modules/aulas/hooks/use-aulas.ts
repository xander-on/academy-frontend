import { useMutation, useQuery } from "@tanstack/react-query"
import { getAulasAction } from "../actions/get-aulas.action";
import { deleteAulaAction } from "../actions/delete-aula.action";
import { createAulaAction } from "../actions/create-aula.action";



export const useAulas = () => {
  
  const getAulasQuery = useQuery({
    queryKey: ['aulas'],
    queryFn: getAulasAction,
    staleTime: 1000 * 60 * 5
  });

  const createAulaMutation = useMutation({
    mutationFn: createAulaAction,
    onSuccess: () => getAulasQuery.refetch()
  });

  const deleteAulaMutation = useMutation({
    mutationFn: deleteAulaAction,
    onSuccess: () => getAulasQuery.refetch()
  });

  return {
    getAulasQuery,
    deleteAulaMutation,
    createAulaMutation
  }
}