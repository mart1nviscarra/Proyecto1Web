let temaActual = 'claro';
const botonTema = document.querySelector('#boton-tema');
const saludoElemento = document.querySelector('#saludo');

function cambiarTema() {
    document.body.classList.toggle('modo-oscuro');
    temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
    botonTema.textContent = temaActual === 'claro' ? '🌙 Modo oscuro' : '☀ Modo claro';
}

function saludar() {
    const horaActual = new Date().getHours();
    let saludo = '';
    saludo = horaActual < 12 ? 'Buenos días' : 'Buenas tardes';
    if (horaActual >= 20) {
        saludo = 'Buenas noches';
    }
    saludoElemento.textContent = saludo;
}

botonTema.addEventListener('click', cambiarTema);
saludar();

const estadisticas = [
{ etiqueta: 'Proyectos', valor: 24 },
{ etiqueta: 'Clientes', valor: 12 },
{ etiqueta: 'Años de experiencia', valor: 3 },
];

const contenedorStats = document.querySelector('#panel-estadisticas');

function renderizarEstadisticas(lista) {
lista.forEach(function (item) {
const tarjeta = document.createElement('div');
tarjeta.classList.add('tarjeta-stat');
tarjeta.innerHTML = `<span class="stat-numero"
data-valor="${item.valor}">0</span>
<p>${item.etiqueta}</p>`;
contenedorStats.appendChild(tarjeta);
});
}

function animarConteo(elemento, valorFinal) {
    let botonAumentar = setInterval(animarConteo, 100);
}
