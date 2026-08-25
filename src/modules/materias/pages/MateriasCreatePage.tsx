import { Button } from "@shadcn/components/ui/button"
import { Card, CardContent } from "@shadcn/components/ui/card"
import { Input } from "@shadcn/components/ui/input"
import { Label } from "@shadcn/components/ui/label"
import { useNavigate } from "react-router";
import { useState } from "react";
import { useMaterias } from "../hooks/use-materias";


const initForm = {
  name        : "",
  description : "",
}

export const MateriasCreatePage = () => {

  const { createMateriaMutation } = useMaterias();
  const navigate = useNavigate();

  const onSaveProfesor = () => {
    createMateriaMutation.mutate(form);
    setForm(initForm);
    navigate("/materias");
  }

  const [form, setForm] = useState(initForm);

  return (
    <div className="mt-6">
      <Card className="max-w-sm mx-auto">
        
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl text-center">Crear Materia</h1>
              <div className="grid gap-2">
                <Label>Nombre</Label>
                <Input
                  onChange={ (e) => setForm({...form, name: e.target.value}) }
                  value={ form.name }
                  type="text"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Descripcion</Label>
                <Input 
                  type="text" 
                  required 
                  onChange={ (e) => setForm({...form, description: e.target.value}) }
                  value={ form.description }
                />
              </div>
            </div>
          </form>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <Button 
              variant="outline"
              onClick={ () => navigate("/materias") }
            >
              Cancelar
            </Button>

            <Button 
              onClick={ onSaveProfesor }
              type="submit"
            >
              Guardar
            </Button>

          </div>

        </CardContent>
      </Card>
    </div>
  )
}
