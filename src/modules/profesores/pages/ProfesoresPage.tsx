import { Button } from "@shadcn/components/ui/button";
import { useProfesores } from "../hooks/use-profesores";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/modules/shared/libraries/shadcn/components/ui/table";

export const ProfesoresPage = () => {

  const {allProfesoresQuery} = useProfesores();

  const profesores = allProfesoresQuery.data;

  if(!profesores && allProfesoresQuery.isLoading)
    return <h1>Loading...</h1>
  
  if(!profesores)
    return <h1>Error</h1>

  return (
    <div className="mt-6 mx-auto max-w-3xl">

      <div className="flex justify-between">

        <h1 className="text-3xl font-bold">ProfesoresPage</h1> 
        <Button className="">Crear</Button>
        {/* <pre>{JSON.stringify(allProfesoresQuery.data, null, 2)}</pre> */}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nombre</TableHead>
            <TableHead>Apellido</TableHead>
            <TableHead>Titulo</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {
            profesores.map(
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
