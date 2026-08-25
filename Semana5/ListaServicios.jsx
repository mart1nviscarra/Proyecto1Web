import TarjetaServicio from "./TarjetaServicio";

const servicios = [
  {
    id: 1,
    icono: "📅",
    titulo: "Agendar citas",
    descripcion: "Crear una agenda para citas de medicamentos.",
  },
  {
    id: 2,
    icono: "📋",
    titulo: "Historial clínico digital",
    descripcion: "Guarda diagnósticos, tratamientos y otros datos de consultas.",
  },
  {
    id: 3,
    icono: "💬",
    titulo: "Consultas médicas",
    descripcion: "Realiza consultas médicas a través de un sistema de chat.",
  },
  {
    id: 4,
    icono: "🔔",
    titulo: "Recordatorios",
    descripcion: "Recibe notificaciones antes de cada cita programada.",
  },
];

function ListaServicios() {
  if (servicios.length === 0) {
    return <p>No hay servicios disponibles por el momento</p>;
  }

  return (
    <div className="cards">
      {servicios.map((servicio) => (
        <TarjetaServicio
          key={servicio.id}
          titulo={servicio.titulo}
          descripcion={servicio.descripcion}
          icono={servicio.icono}
        />
      ))}
    </div>
  );
}

export default ListaServicios;
