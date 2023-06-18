import { ConteinerFilter } from "./FiltersStyle";

export default function Filters() {
    return (
        <ConteinerFilter>
            <h1>Filters</h1>
            <label>Valor mínimo:</label>
            <input type={`text`}  />
            <label>Valor máximo:</label>
            <input type={`text`}  />
            <label>Buca por nome:</label>
            <input type={`text`}  />
        </ConteinerFilter>

    )
}