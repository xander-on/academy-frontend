import { Button } from "@/modules/shared/libraries/shadcn/components/ui/button"
import { Card, CardContent } from "@/modules/shared/libraries/shadcn/components/ui/card"
import { Input } from "@/modules/shared/libraries/shadcn/components/ui/input"
import { Label } from "@/modules/shared/libraries/shadcn/components/ui/label"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useAulas } from "../hooks/use-aulas"
import { NativeSelect, NativeSelectOption } from "@/modules/shared/libraries/shadcn/components/ui/native-select"
import { useProfesores } from "@/modules/profesores/hooks/use-profesores"
import { useMaterias } from "@/modules/materias/hooks/use-materias"


const initForm = {
  name       : "",
  profesorId : "",
  materiaId  : ""
}

export const AulasCreatePage = () => {

  const { createAulaMutation } = useAulas();
  const { getProfesoresQuery } = useProfesores();
  const { getMateriasQuery }   = useMaterias();

  const navigate        = useNavigate();
  const [form, setForm] = useState(initForm);

  const profesores = getProfesoresQuery.data;
  const materias   = getMateriasQuery.data;


  const isValidForm = () => {
    return form.name.length > 0 
      && form.profesorId.length > 0 
      && form.materiaId.length > 0;
  }

  const onSaveAula = () => {
    // console.log(form);
    createAulaMutation.mutate(form);
    setForm(initForm);
    navigate("/aulas");
  }

  return (
    <div className="mt-6">
      <Card className="max-w-sm mx-auto">
        
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl text-center">Crear Aula</h1>
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
                <Label>Profesor</Label>

                <NativeSelect 
                  className="w-full"
                  onChange={ (e) => setForm({...form, profesorId: e.target.value}) }
                >
                  <NativeSelectOption value="">-</NativeSelectOption>
                  {
                    profesores?.map( profesor => (
                      <NativeSelectOption 
                        key={ profesor.id } 
                        value={ profesor.id }
                      >
                        {profesor.lastName} { profesor.firstName }
                      </NativeSelectOption>
                    ) )
                  }
                  
                </NativeSelect>
              </div>


              <div className="grid gap-2">
                <Label>Materia</Label>

                <NativeSelect 
                  className="w-full"
                  onChange={ (e) => setForm({...form, materiaId: e.target.value}) }
                >
                  <NativeSelectOption value="">-</NativeSelectOption>
                  {
                    materias?.map( materias => (
                      <NativeSelectOption 
                        key={ materias.id } 
                        value={ materias.id }
                      >
                        {materias.name}
                      </NativeSelectOption>
                    ) )
                  }
                  
                </NativeSelect>
              </div>
            </div>
          </form>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <Button 
              variant="outline"
              onClick={ () => navigate("/aulas") }
            >
              Cancelar
            </Button>

            <Button 
              onClick={ onSaveAula }
              type="submit"
              disabled={ !isValidForm() }
            >
              Guardar
            </Button>

          </div>

        </CardContent>
      </Card>
    </div>
  )
}
