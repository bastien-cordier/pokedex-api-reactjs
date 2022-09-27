import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([]);
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
          <div className="flex justify-evenly flex-wrap mx-10">
            {pokedex.map((pokemon, i) => (
              <Card key={i} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
