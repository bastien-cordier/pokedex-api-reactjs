import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div className="w-64 max-w-sm bg-white rounded-lg shadow-md my-5 mx-2 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 ease-in-out duration-300">
      <Link to={`/${pokemon.name}`}>
        <img
          className="p-8 rounded-t-lg"
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
        />
        <div className="px-5 pb-5">
          <h4 className="text-xl capitalize font-semibold tracking-tight text-gray-900 dark:text-white">
            {pokemon.name}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default Card;
