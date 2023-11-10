import React, { useState, useEffect } from "react";
import Selected from "./components/select/selectOption";
import "./App.css";
import TableList from "./components/table/table";

export default function App() {
  const [marcas, setMarcas] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState("");
  const [modelos, setModelos] = useState([]);
  const [selectedModelo, setSelectedModelo] = useState("");
  const [anos, setAnos] = useState([]);
  const [selectedAno, setSelectedAno] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/")
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Erro na solicitação");
      })
      .then((data) => setMarcas(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedMarca) {
      fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedMarca}/modelos`
      )
        .then((response) => {
          if (response.ok) return response.json();
          else throw new Error("Erro na solicitação");
        })
        .then((data) => setModelos(data.modelos))
        .catch((error) => console.error(error));
    }
  }, [selectedMarca]);

  useEffect(() => {
    if (selectedModelo) {
      fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedMarca}/modelos/${selectedModelo}/anos`
      )
        .then((response) => {
          if (response.ok) return response.json();
          else throw new Error("Erro na solicitação");
        })
        .then((data) => setAnos(data))
        .catch((error) => console.error(error));
    }
  }, [selectedModelo, selectedMarca]);

  const buscarDados = () => {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedMarca}/modelos/${selectedModelo}/anos/${selectedAno}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Erro na solicitação");
      })
      .then((data) => {
        console.log("Dados da API:", data);

        const {
          Valor,
          Marca,
          Modelo,
          AnoModelo,
          Combustivel,
          CodigoFipe,
        } = data;

        console.log("Valor:", Valor);
        console.log("Marca:", Marca);
        console.log("Modelo:", Modelo);
        console.log("Ano Modelo:", AnoModelo);
        console.log("Combustível:", Combustivel);
        console.log("Código Fipe:", CodigoFipe);

        setInfo(data);
      })
      .catch((error) => console.error(error));
  };

  const handleMarcaChange = (event) => {
    setSelectedMarca(event.target.value);
    setModelos([]);
    setAnos([]);
  };

  const handleModeloChange = (event) => {
    setSelectedModelo(event.target.value);
  };

  return (
    <>
      <h1>Consulte a tabela Fipe</h1>
      <div className="App">
        <form>
          <Selected
            marcas={marcas}
            modelos={modelos}
            anos={anos}
            selectedMarca={selectedMarca}
            handleMarcaChange={handleMarcaChange}
            selectedModelo={selectedModelo}
            handleModeloChange={handleModeloChange}
            selectedAno={selectedAno}
            setSelectedAno={setSelectedAno}
          />
          <p>Ano selecionado: {selectedAno}</p>
          <button onClick={() => buscarDados()} type="button">
            Buscar Informações
          </button>
        </form>

        {info && (
          < TableList info={info}/>
        )}
      </div>
    </>
  );
}
