
import Character from "../Cards/Card";
import React, { useEffect, useState } from "react";



export default function Container(props) {
    
const [characters, setCharacters] = useState([]);
  const [searchValue] = useState("");

  useEffect(() => {
    getAPI().then((resp) => {
      setCharacters(resp.results);
    });
  }, []);

  const getAPI = async () => {
    const url = "https://rickandmortyapi.com/api/character/";
    return await fetch(url).then((result) => result.json());
  };
  const filteredChars = characters.filter((char) => {
    return char.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });
 
  return (
    <div className="contenedor">
        {filteredChars.map((character) => {
        return (
          <Character
            key={character.id}
            img={character.image}
            name={character.name}
            origin={character.origin.name}
            status={character.status}
            gender={character.gender}
          />
        );
      })} 
    </div>)

  
}

