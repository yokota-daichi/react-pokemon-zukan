// src/components/PokemonCard.tsx
import React from 'react';
import type { PokemonWithJapaneseName } from '../api/pokemonWithJapaneseName';

interface PokemonCardProps {
  pokemon: PokemonWithJapaneseName;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
        alt={pokemon.japaneseName}
        className="w-full h-32 object-contain"
      />
      <div className="mt-2">
        <p className="text-sm text-gray-500">No.{pokemon.number}</p>
        <p className="font-bold text-lg">{pokemon.japaneseName}</p>
        <p className="text-xs text-gray-600">{pokemon.name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
