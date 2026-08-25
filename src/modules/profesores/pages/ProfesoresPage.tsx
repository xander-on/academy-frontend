import { Button } from "@shadcn/components/ui/button";
import { useProfesores } from "../hooks/use-profesores";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/modules/shared/libraries/shadcn/components/ui/table";
import { useNavigate } from "react-router";

export const ProfesoresPage = () => {

  const {allProfesoresQuery} = useProfesores();
  const navigation = useNavigate();
  const profesores = allProfesoresQuery.data;

  if(!profesores && allProfesoresQuery.isLoading)
    return <h1>Loading...</h1>


  return (
    <div className="mt-6 mx-auto max-w-3xl">
  
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Profesores</h1> 
          <Button
            onClick={ () => navigation("/profesores/create") }
          >Crear</Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Nombre</TableHead>
              <TableHead>Apellido</TableHead>
              <TableHead>Titulo</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {
              profesores?.map(
                p => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium">{p.firstName}</TableCell>
                    <TableCell>{p.lastName}</TableCell>
                    <TableCell>{p.degree}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant={"destructive"}
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
