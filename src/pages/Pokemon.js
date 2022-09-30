import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PokemonInfos from "../components/PokemonInfos";

export default function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemon(res.data);
    });
  }, [name]);

  if (!pokemon)
    return (
      <div className="flex h-screen justify-center items-center">
        <img src="assets/pokemonloader.gif" className="h-64" alt="loader" />
      </div>
    );

  return (
    <div className="flex h-screen justify-center items-center">
      <PokemonInfos pokemon={pokemon} />
    </div>
  );
}
