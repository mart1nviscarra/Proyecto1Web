import { useState, useEffect } from 'react';
import TarjetaPokemon from './TarjetaPokemon.jsx';

function ListaPokemon() {
const [pokemones, setPokemones] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);
const [busqueda, setBusqueda] = useState('');
useEffect(() => {
    async function obtenerPokemones() {
try {
const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    if (!respuesta.ok) {
        throw new Error('No se pudo obtener la lista de pokémon');
    }
const datos = await respuesta.json();
    setPokemones(datos.results);
        }catch (err) {
        setError(err.message);
        } finally {
        setCargando(false);
        }
    }
    obtenerPokemones();
}, []);
const pokemonesFiltrados = pokemones.filter((p) =>
p.name.includes(busqueda.toLowerCase())
);

if (cargando) return <p>Cargando pokémon...</p>;
if (error) return <p>Ocurrió un error: {error}</p>;

return (
    <>
    <input 
        type="text" 
        value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar..." 
        />
    <ul className="lista-pokemon">
        {pokemonesFiltrados.map((p) => (
        <TarjetaPokemon 
            key={p.name} 
            nombre={p.name}
        />
        ))}
    </ul>
   </> 
  );
}


export default ListaPokemon;