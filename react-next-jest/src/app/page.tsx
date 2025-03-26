"use client";
import React from "react";
import IconButton from "./components/Icon";
import InfoDock from "./components/EmpresaInfo/InfoDock";
import WarningMessage from "./components/WarningMessage";
import DropdownMenu from "./components/DropDownMenu";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import ExpandableCard from "./components/ExpandableCards";
import ButtonTag from "./components/Button";
import ConvenioMarco from "./components/ConvenioMarco/ConvenioMarco";
import Contactos from "./components/Contactos/Contactos";
import ConvenioTestView from "./components/MyGade/ConvenioTestView";

const Home: React.FC = () => {


  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Header
                title="Empresas"
                path={[
                  { name: "Inicio", link: "/" },
                  { name: "Empresas", link: "/empresas" },
                  { name: "1957 BIZKARRA, S.L.", link: "/empresas/1957-bizkarra" },
                ]}
              />
              <div className=" w-[100%] h-[100%] bg-white p-5 ">
                <div className="flex space-x-4 justify-end mr-5 mt-5 mb-5">
                  <DropdownMenu />
                  <ButtonTag text={"Editar Empresa"} bgColor={"#ea580c"} textColor={"white"} />
                </div>
                <WarningMessage message={"los datos de esta empresa NO HAN SIDO REVISADOS."} />
                <div className="flex space-x-4 mt-5">
                  <IconButton type="idea" color="#EAB56E" tooltip={"Nunca Activa en proyectos I+D"} />
                  <IconButton type="refresh" color="#6EC5D7" tooltip={"Visitada"} />
                  <IconButton type="shuffle" color="#E55E5E" tooltip={"No info PraktiKer"} />
                  <h1 className=" text-black text-3xl mt-1">1957 BIZKARRA, S.L.</h1>
                </div>
                <div className="p-3 mt-2">
                  <div className="flex space-x-4 mt-5 justify-end mr-5 mb-1">
                    <ButtonTag text="Prácticas" icon="login" bgColor="#6EC5D7" textColor="white" />
                    <ButtonTag text="FP Dual Intensiva" icon="refresh" bgColor="white" textColor="#878787" />
                  </div>
                  <InfoDock />
                  <div className="p-6">

                    {/* Convenio Marco */}
                    <ExpandableCard title={"Convenio Marco"}>
                      <ConvenioMarco />
                    </ExpandableCard>

                    {/*Contactos */}
                    <ExpandableCard title={"Contactos"}>
                      <Contactos />
                    </ExpandableCard>
                    
                    {/*Convenios*/}
                    <ConvenioTestView/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
};

export default Home;