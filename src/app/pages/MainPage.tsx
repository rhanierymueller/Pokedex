"use client"

import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import './MainPage.css';

interface Pokemon {
  name: string;
  url: string;
}

function MainPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const getPokemons = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=20")
      setPokemons(result.data.results)
    }

    getPokemons()
  }, [])

  return (
    <main className="container">
      <List className="list">
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <ListItem key={pokemon.name} className="pokemonItem">
            <ListItemAvatar>
              <Avatar alt={pokemon.name} sx={{width: 100, height: 80}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
            </ListItemAvatar>
            <ListItemText>{pokemon.name}</ListItemText>
         </ListItem>
        ))}
      </List>
      </main>
  );
}

export default MainPage;