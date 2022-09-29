import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)));
      })
      .then((results) => {
        setLoading(false);
        setPokedex(results.map((res) => res.data));
        console.log(results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="py-4 px-10 text-5xl text-white font-semibold">Pokedex</h1>
      <div>
        {loading ? (
          <div>Catch</div>
        ) : (
          <div className="mx-10">
            <label htmlFor="search">
              <input
                type="search"
                placeholder="Search your pokemon..."
                className="py-3 px-4 rounded-xl w-60 hover:scale-105 ease-in-out duration-300"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </label>
            <div className="flex justify-evenly flex-wrap">
              {pokedex
                .filter((pokemon) => {
                  if (search === "") {
                    return pokemon;
                  } else if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
                    return pokemon;
                  }
                })
                .map((pokemon, i) => (
                  <Card key={i} pokemon={pokemon} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
