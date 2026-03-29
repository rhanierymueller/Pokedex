'use client'

import { Box } from '@mui/material';
import { use, useEffect, useState } from 'react';
import './page.css';

interface DetalhesProps {
  params: Promise<{
    name: string;
  }>;
}

interface AbilityItem {
  ability: {
    name: string;
  };
}

interface Details {
  abilities: AbilityItem[];
  name: string;
}

function Detalhes({ params }: DetalhesProps) {
  const { name } = use(params);
  const [details, setDetails] = useState<Details | null>(null);

  useEffect(() => {
    const getMoreInformation = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setDetails(data);
      console.log(data);
    };

    getMoreInformation();
  }, [name]);

  return (
    <Box className="container">
      {details?.abilities.map((detail: AbilityItem) => (
        <p key={detail.ability.name}>{detail.ability.name}</p>
      ))}
    </Box>
  );
}

export default Detalhes;