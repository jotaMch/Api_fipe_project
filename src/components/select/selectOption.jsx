// Selected.jsx
import React from "react";

function Selected({ marcas, modelos, anos, selectedMarca, handleMarcaChange, selectedModelo, handleModeloChange, selectedAno, setSelectedAno }) {
return (
        <>
        <select
            value={selectedMarca}
            onChange={handleMarcaChange}
        >
            <option value="">Selecione uma marca</option>
            {marcas.map(marca => (
            <option key={marca.id} value={marca.codigo}>
                {marca.nome}
            </option>
            ))}
        </select>

        {modelos.length > 0 && (
            <div>
            <select
                value={selectedModelo}
                onChange={handleModeloChange}
            >
                <option value="">Selecione um modelo</option>
                {modelos.map(modelo => (
                <option key={modelo.codigo} value={modelo.codigo}>
                    {modelo.nome}
                </option>
                ))}
            </select>
            </div>
        )}

        {anos.length > 0 && (
            <div>
            <select
                value={selectedAno}
                onChange={(event) => setSelectedAno(event.target.value)}
            >
                <option value="">Selecione um ano</option>
                {anos.map(ano => (
                <option key={ano.codigo} value={ano.codigo.toString()}>
                    {ano.nome}
                </option>
                ))}
            </select>
            </div>
        )}
        </>
    );
}

export default Selected;
