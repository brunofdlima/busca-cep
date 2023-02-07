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
    });
  };

  return (
    <div id="container" className="w-screen h-screen px-4 pt-20">
      <div id="containerbox" className="max-w-[43.75rem] h-[29.375rem] mx-auto">
        <div className="text-[#29221f] text-3xl my-4">
          <strong className="ml-4 md:ml-10">Busca cep!</strong>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <input
                id="inputCep"
                className="my-4 rounded-md w-[70%] ml-4 text-[1.375rem] text-[#29221f] text-center md:ml-10 md:w-[35%] md:mt-9"
                onChange={handleChange}
                placeholder="Ex: 60333459"
              ></input>
              <button
                className="bg-white w-[2.8125rem] h-[2.25rem] rounded-lg text-slate-400 ml-4 md:mt-9"
                onClick={Busca}
              >
                <BiSearchAlt2 className="mx-auto text-[#29221f]" />
              </button>
            </div>
            <label className="text-base ml-9 max-[23.4375rem]:ml-4 max-[48rem]:mt-4">
              Endereço:
            </label>
            <input
              type="text"
              className="w-[90%] mx-auto h-10 rounded-md focus:outline-none p-4 font-bold text-[1.125rem] text-[#29221f]"
              value={res ? `${res?.address}` : ""}
              readOnly
            />
            <label className="text-base ml-9 mt-2 max-[23.4375rem]:ml-4">
              Bairro:
            </label>
            <input
              type="text"
              className="w-[90%] mx-auto h-10 rounded-md focus:outline-none p-4 font-bold text-[1.125rem] text-[#29221f]"
              value={res ? `${res?.district}` : ""}
              readOnly
            />
            <label className="text-base ml-9 mt-2 max-[23.4375rem]:ml-4">
              Cidade:
            </label>
            <input
              type="text"
              className="w-[90%] mx-auto h-10 rounded-md focus:outline-none p-4 font-bold text-[1.125rem] text-[#29221f]"
              value={res ? `${res?.city}` : ""}
              readOnly
            />
            <label className="text-base ml-9 mt-2 max-[23.4375rem]:ml-4">
              Estado:
            </label>
            <input
              type="text"
              className="w-[90%] mx-auto h-10 rounded-md focus:outline-none p-4 font-bold text-[1.125rem] text-[#29221f]"
              value={res ? `${res?.state}` : ""}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
