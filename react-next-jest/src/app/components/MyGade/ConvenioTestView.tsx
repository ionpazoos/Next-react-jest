import { useState } from "react";
import ConvenioSidebar from "./ConvenioSidebar";
import ConvenioForm from "./ConvenioForm";
import { convenioData } from "@/app/data/convenioData";

const flattenConvenios = (data: typeof convenioData) =>
  data.flatMap((group) => group.items);

const ConvenioTestView = () => {
  const [selectedId, setSelectedId] = useState("curr_22_23");

  const currentConvenio = flattenConvenios(convenioData).find(
    (c) => c.id === selectedId
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <ConvenioSidebar
        convenios={convenioData.map(({ year, items }) => ({
          year,
          items: items.map(({ id, label }) => ({ id, label })),
        }))}
        activeId={selectedId}
        onSelect={setSelectedId}
        onAdd={() => alert("Añadir convenio")}
      />

      <div className="flex-1 p-8">
        <h1 className="text-xl font-bold mb-6">{currentConvenio?.label}</h1>
        {currentConvenio && (
          <ConvenioForm data={currentConvenio.data} />
        )}
      </div>
    </div>
  );
};

export default ConvenioTestView;