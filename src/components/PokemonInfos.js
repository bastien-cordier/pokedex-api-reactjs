import React from "react";
import { typeColors } from "../colors";
import { Link } from "react-router-dom";

const PokemonInfos = ({ pokemon }) => {
  const pokemonColor = typeColors[pokemon.types[0].type.name];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mx-10 bg-slate-800 rounded-xl drop-shadow-lg">
        <div className="col-auto">
          <img
            className="h-5/6 mx-auto"
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="col-span-2 my-10 ml-10">
          <p className="capitalize text-4xl font-semibold text-white">
            #{pokemon.id} - {pokemon.name}
          </p>
          <div className="flex text-white text-lg mt-3">
            <span className="font-semibold">Types : </span>
            {pokemon.types.map((types, i) => {
              return (
                <div
                  key={i}
                  className="px-2 ml-2 rounded-lg"
                  style={{ backgroundColor: typeColors[types.type.name] }}
                >
                  <div className="font-semibold capitalize">{types.type.name}</div>
                </div>
              );
            })}
          </div>
          <div className="flex text-white text-lg mt-2">
            <span className="font-semibold">Abilities : </span>
            {pokemon.abilities.map((abilities, i) => {
              return (
                <div key={i} className="px-1 capitalize">
                  {abilities.ability.name}
                </div>
              );
            })}
          </div>
          <div className="text-lg text-white mt-4">
            <span className="font-semibold">Stats :</span>
            <div className="grid grid-cols-2 ">
              {pokemon.stats.map((stats, idx) => {
                return (
                  <div key={idx}>
                    <p className="capitalize">
                      {stats.base_stat} {stats.stat.name}
                    </p>
                    <div class="w-2/4 bg-gray-700 rounded-full h-1.5 mb-4 ">
                      <div
                        class="h-1.5 rounded-full"
                        style={{
                          backgroundColor: pokemonColor,
                          width: `${stats.base_stat}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="flex items-center justify-center mt-8">
          <button className="py-4 px-10 rounded-xl font-semibold text-white hover:scale-105 ease-in-out duration-300 bg-slate-800">
            Retour à la page d'accueil
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PokemonInfos;
