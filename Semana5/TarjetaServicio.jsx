function TarjetaServicio({ titulo, descripcion, icono }) {
  return (
    <article className="card">
      <span className="card__icono">{icono}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </article>
  );
}

export default TarjetaServicio;
