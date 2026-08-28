import { academyApi } from "@/config/academyApi"


export const deleteAulaAction = async(id:string) => {

  try{
    const { data } = await academyApi.delete(`/aulas/${id}`);
    return data;
    
  }catch(error){
    console.error(error)
    throw error
  }
}