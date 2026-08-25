import { academyApi } from "@/config/academyApi";


interface DeleteMateriaResponse{
  id: string
}


export const deleteMateriasAction = async (id: string) => {

  try{
    const {data} = await academyApi.delete<DeleteMateriaResponse>(`/materias/${id}`);
    return data;

  }catch(error){
    console.error(error);
    throw error;
  }
}