import { Button } from "@/modules/shared/libraries/shadcn/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/modules/shared/libraries/shadcn/components/ui/table";
import { Link, useNavigate } from "react-router";
import { useMaterias } from "../hooks/use-materias";

export const MateriasPage = () => {
  const {getMateriasQuery, deleteMateriaMutation} = useMaterias();
  const navigation = useNavigate();

  const onDelete = (id: string) => {
    deleteMateriaMutation.mutate(id);
  }

  const materias = getMateriasQuery.data;

  if(!materias && getMateriasQuery.isLoading)
    return <h1>Loading...</h1>


  return (
    <div className="mt-6 mx-auto max-w-3xl">
        <Link to="/">Menu</Link>
        <div className="flex justify-between mt-2">
          <h1 className="text-3xl font-bold">Materias</h1> 
          <Button
            onClick={ () => navigation("/materias/create") }
          >Crear</Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Nombre</TableHead>
              <TableHead>Descripcion</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {
              materias?.map(
                m => (
                  <TableRow key={m.id}>
                    <TableCell className="font-medium">{m.name}</TableCell>
                    <TableCell>{m.description}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant={"destructive"}
                        onClick={ () => onDelete(m.id) }
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
