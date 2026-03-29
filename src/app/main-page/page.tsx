"use client"

import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import './page.css';
import { useRouter } from "next/navigation";

interface Pokemon {
  name: string;
  url: string;
}

function MainPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const router = useRouter()

  useEffect(() => {
    const getPokemons = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=20")
      setPokemons(result.data.results)
    }

    getPokemons()
  }, [])

  return (
    <Box className="container">
      <Typography variant="h4">Pokemons</Typography>
      <List className="list">
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <ListItem key={pokemon.name} className="pokemonItem">
            <ListItemAvatar>
              <Avatar alt={pokemon.name} sx={{width: 100, height: 80}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
            </ListItemAvatar>
            <ListItemText>{pokemon.name}</ListItemText>
           <Button sx={{color: '#fff'}}  onClick={() => router.push(`/detalhes/${pokemon.name}`)}>Ver</Button>
         </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MainPage;