import React from "react";
import { ConteinerFilter } from "./FiltersStyle";

export default function Filters({ searchName, setSearchName, minFilter, setMinFilter, maxFilter, setMaxFilter }) {

    return (
        <ConteinerFilter>

            <label>Busca por nome:</label>
            <input type={`text`}
                placeholder="Buscar por nome"
                value={searchName}
                onChange={(event) => setSearchName(event.target.value)}
            />
            <label>Valor máximo:</label>
            <input type={`number`}
                placeholder="Buscar por valor máximo"
                value={maxFilter}
                onChange={(event) => setMaxFilter(event.target.value)}
            />
            <label>Valor mínimo:</label>
            <input type={`number`}
                placeholder="Buscar por valor mínimo"
                value={minFilter}
                onChange={(event) => setMinFilter(event.target.value)}
            />

        </ConteinerFilter>

    )
}
