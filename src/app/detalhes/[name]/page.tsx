'use client'

import { use, useEffect, useState } from 'react';

interface DetalhesProps {
  params: Promise<{
    name: string;
  }>;
}

function Detalhes({ params }: DetalhesProps) {
  const { name } = use(params);
  const [details, setDetails] = useState(null)

  useEffect(() => {
    const getMoreInformation = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()
      setDetails(data)
      console.log(data)
  }
  
  getMoreInformation()
  }, [name])
  
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default Detalhes;