import Select from "./ui/Select";
import Checkbox from "./ui/checkbox";
import Field from "./ui/Field";

interface ConvenioFormProps {
  data: {
    tipo: string;
    estadoSincronizacion: string;
    modalidad: string;
    AñoCurso: string;
    Curso: string;
    revisado: boolean;
    curricular: boolean;
    reasignacion: boolean;
  };
}

const ConvenioForm: React.FC<ConvenioFormProps> = ({ data }) => {
  return (
    <div className="bg-white border rounded px-6 py-4 text-sm space-y-5">
      <Field
        label="Estado Sincronización"
        value={data.estadoSincronizacion}
      />

      <Select
        label="Tipo de convenio/ beca/ contrato"
        options={[
          "myGADE Dual Anual Curricular",
          "myGADE Dual Anual Extracurricular",
          "Convenio Alecop",
          "Contrato Normal"
        ]}
        value={data.tipo}
      />

      <Select
        label="Modalidad de la práctica"
        options={["Presencial", "Remota", "Mixta"]}
        value={data.modalidad}
      />

      <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm pl-[220px]">
        <Checkbox label="Convenio Revisado" defaultChecked={data.revisado} />
        <Checkbox label="Curricular" defaultChecked={data.curricular} />
        <Checkbox
          label="Convenio de reasignación"
          defaultChecked={data.reasignacion}
        />
      </div>

      <Select
        label="Curso académico"
        options={["22/23", "23/24"]}
        value={data.AñoCurso}
      />
      <Select
        label="Curso"
        options={["1", "2", "3", "4"]}
        value={data.Curso}
      />
    </div>
  );
};

export default ConvenioForm;