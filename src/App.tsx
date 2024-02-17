import axios from "axios";
import { useState } from "react";

import { BiSearchAlt2 } from "react-icons/bi";

export function App() {
  const [cep, setCep] = useState();
  const [res, setRes] = useState<any>();

  const handleChange = (event: any) => {
    setCep(event.target.value);
  };

  const Busca = (e: any) => {
    e.preventDefault();
    axios.get(`https://cep.awesomeapi.com.br/json/${cep}`).then((response) => {
      setRes(response.data);
      console.log(response.data);
    });
  };

  return (
    <div
      id="container"
      className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-sky-900 to-indigo-800 shadow-3xl"
    >
      <div className="flex flex-col isolate aspect-video p-14 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
        <strong className="text-4xl py-6">Busca cep!</strong>
        <div className="py-4">
          <input
            className="rounded-md text-[1.375rem] text-[#29221f] text-center h-8"
            onChange={handleChange}
            placeholder="Entre com o cep aqui"
          ></input>
          <button
            className="bg-white w-[2.0625rem] rounded-full text-slate-400 ml-4 h-8"
            onClick={Busca}
          >
            <BiSearchAlt2 className="mx-auto text-[#29221f]" />
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <label className="text-base text-white">Endereço:</label>
            <input
              type="text"
              className="h-8 rounded-md focus:outline-none font-bold text-[1.125rem] text-[#29221f] text-center"
              value={res ? `${res?.address}` : ""}
              readOnly
            />
            <label className="text-base text-white mt-2">Bairro:</label>
            <input
              type="text"
              className="h-8 w-96 rounded-md focus:outline-none font-bold text-[1.125rem] text-[#29221f] text-center"
              value={res ? `${res?.district}` : ""}
              readOnly
            />
            <label className="text-base text-white mt-2">Código do Município no IBGE:</label>
            <input
              type="text"
              className="h-8 w-96 rounded-md focus:outline-none font-bold text-[1.125rem] text-[#29221f] text-center"
              value={res ? `${res?.city_ibge}` : ""}
              readOnly
            />
          </div>
          <div className="flex flex-col ml-3">
            <label className="text-base text-white">Cidade:</label>
            <input
              type="text"
              className="h-8 rounded-md focus:outline-none font-bold text-[1.125rem] text-[#29221f] text-center"
              value={res ? `${res?.city}` : ""}
              readOnly
            />
            <label className="text-base text-white mt-2">Estado:</label>
            <input
              type="text"
              className="h-8 w-96 rounded-md focus:outline-none font-bold text-[1.125rem] text-[#29221f] text-center"
              value={res ? `${res?.state}` : ""}
              readOnly
            />
            <label className="text-base text-white mt-2">Latitude / Longitude:</label>
            <input
              type="text"
              className="h-8 w-96 rounded-md focus:outline-none font-bold text-[1.125rem] text-[#29221f] text-center"
              value={res ? `${res?.lat} / ${res?.lng}` : ""}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
