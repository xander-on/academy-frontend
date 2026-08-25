import { useMutation, useQuery } from "@tanstack/react-query"
import { getMateriasAction } from "../actions/get-materias.action";
import { createMateriasAction } from "../actions/create-materia.action";
import { deleteMateriasAction } from "../actions/delete-mater.action";

export const useMaterias = () => {
 
  const getMateriasQuery = useQuery({
    queryKey: ['materias'],
    queryFn: getMateriasAction,
    staleTime: 1000 * 60 * 5
  });

  const createMateriaMutation = useMutation({
    mutationFn: createMateriasAction,
    onSuccess: () => {
      getMateriasQuery.refetch();
    }
  });

  const deleteMateriaMutation = useMutation({
    mutationFn: deleteMateriasAction,
    onSuccess: () => {
      getMateriasQuery.refetch();
    }
  });
  
  return {
    getMateriasQuery,
    createMateriaMutation,
    deleteMateriaMutation
  }
}