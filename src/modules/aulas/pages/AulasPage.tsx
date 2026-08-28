import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/modules/shared/libraries/shadcn/components/ui/table";
import { useAulas } from "../hooks/use-aulas";
import { Link, useNavigate } from "react-router";
import { Button } from "@/modules/shared/libraries/shadcn/components/ui/button";

export const AulasPage = () => {

  const { getAulasQuery, deleteAulaMutation } = useAulas();
  const navigation = useNavigate();

  const onDelete = (id: string) => {
    deleteAulaMutation.mutate(id);
  }

  if(getAulasQuery.isLoading)
    return <div>Loading...</div>
  
  const aulas = getAulasQuery.data;

  return (
    <div className="mt-6 mx-auto max-w-3xl">
      <Link to="/">Menu</Link>
      
      <div className="flex justify-between mt-2">
        <h1 className="text-3xl font-bold">Aulas</h1> 
        <Button
          onClick={ () => navigation("/aulas/create") }
        >Crear</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Aula</TableHead>
            <TableHead>Profesor</TableHead>
            <TableHead>Materia</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            aulas?.map(
              aula => (
                <TableRow key={aula.id}>
                  <TableCell className="font-medium">{aula.name}</TableCell>
                  <TableCell>{aula.profesor.firstName}</TableCell>
                  <TableCell>{aula.materia.name}</TableCell>
                  <TableCell className="text-right">

                    <Button
                      variant={"destructive"}
                      onClick={ () => onDelete(aula.id) }
                    >Delete</Button>

                  </TableCell>
                </TableRow>
              )
            )
          }
        </TableBody>
      </Table>
    </div>
  )
}
