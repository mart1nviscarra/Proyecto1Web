import {useState, useEffect} from 'react';

function TarjetaPokemon({ nombre }) {
    const [detalle, setDetalle] = useState(null);
    useEffect(() => {fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((res) => res.json())
    .then((data) => setDetalle(data));
    }, [nombre]);

if (!detalle) return <div className="tarjeta">Cargando...</div>;
return (
<div className="tarjeta">
    <img src={detalle.sprites.front_default} alt={nombre} />
        <h3>{nombre}</h3>
        <p>Tipo: {detalle.types.map((t) => t.type.name).join(', ')}</p>
</div>
);
}
export default TarjetaPokemon;