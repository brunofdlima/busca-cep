import axios from "axios";
import { useState } from "react";

import { BiSearchAlt2 } from "react-icons/bi";

import { Input } from "./Components/Input";
import { Container } from "./Components/Container";
import { Title } from "./Components/Title";
import { FormContainer } from "./Components/FormContainer";

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
    <Container>
      <FormContainer>
        <Title title="Busca cep!" />
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
        <div className="grid grid-cols-1 switch:grid-cols-2">
          <Input
            value={res ? `${res?.address}` : ""}
            labelforinput="Endereço:"
          />
          <Input
            value={res ? `${res?.district}` : ""}
            labelforinput="Bairro:"
          />
          <Input value={res ? `${res?.city}` : ""} labelforinput="Cidade:" />
          <Input value={res ? `${res?.state}` : ""} labelforinput="Estado:" />
          <Input
            value={res ? `${res?.city_ibge}` : ""}
            labelforinput="Código do Município no IBGE:"
          />
          <Input
            value={res ? `${res?.lat} / ${res?.lng}` : ""}
            labelforinput="Latitude / Longitude:"
          />
        </div>
      </FormContainer>
    </Container>
  );
}
