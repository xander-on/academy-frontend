import { academyApi } from "@/config/academyApi";

interface DeleteProfesorResponse {
  id: string;
}


export const deleteProfesorAction = async(id: string) => {

  try{
    const {data} = await academyApi.delete<DeleteProfesorResponse>(`/profesores/${id}`);
    return data;

  }catch(error){
    console.error(error);
    throw error;
  }
}