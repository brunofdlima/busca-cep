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
      <div id="containerbox" className="max-w-[700px] h-[460px] mx-auto">
        <div className="text-[#29221f] text-3xl my-4">
          <strong className="ml-4 md:ml-10">Busca cep!</strong>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <input
                id="inputCep"
                className="my-4 rounded-md w-[70%] ml-4 text-[#29221f] text-center md:ml-10 md:w-[35%] md:mt-9"
                onChange={handleChange}
                placeholder="Ex: 60333459"
              ></input>
              <button
                className="bg-white ml-4 w-[45px] h-[36px] rounded-lg text-slate-400 md:ml-4 md:mt-9"
                onClick={Busca}
              >
                <BiSearchAlt2 className="mx-auto text-[#29221f]" />
              </button>
            </div>
            <input
              type="text"
              className="my-4 w-[90%] mx-auto h-10 rounded-md focus:outline-none p-4 font-bold text-[#29221f] md:mt-8"
              value={res ? `${res?.address}` : ""}
              readOnly
            />
            <input
              type="text"
              className="my-4 w-[90%] mx-auto h-10 rounded-md focus:outline-none p-4 font-bold text-[#29221f]"
              value={res ? `${res?.district}` : ""}
              readOnly
            />
            <input
              type="text"
              className="my-4 w-[90%] mx-auto h-10 rounded-md focus:outline-none p-4 font-bold text-[#29221f]"
              value={res ? `${res?.city}` : ""}
              readOnly
            />
            <input
              type="text"
              className="my-4 w-[90%] mx-auto h-10 rounded-md focus:outline-none p-4 font-bold text-[#29221f]"
              value={res ? `${res?.state}` : ""}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
