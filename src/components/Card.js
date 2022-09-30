import React from "react";
import { Link } from "react-router-dom";
import { typeColors } from "../colors";

const Card = ({ pokemon }) => {
  const pokemonColor = typeColors[pokemon.types[0].type.name];

  return (
    <div
      className="w-64 rounded-xl shadow-md my-5 mx-2  hover:scale-105 ease-in-out duration-300"
      style={{ backgroundColor: pokemonColor }}
    >
      <Link to={`/${pokemon.name}`}>
        <img
          className="p-8 rounded-t-lg"
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
        />
        <div className="px-5 pb-5">
          <h4 className="text-2xl capitalize font-semibold tracking-tight text-white">
            #{pokemon.id} - {pokemon.name}
          </h4>
          <p className="text-md font-semibold text-white py-2">
            Type : <span className="capitalize">{pokemon.types[0].type.name}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
