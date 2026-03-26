type Position = {
    linea: string; //"defensa | medio | delantero"
    rol: string; //"defender | filtrar | hacer goles"
}

type Jugador = {
    nombre: string;
    club: string;
    dorsal: number;
    activo: boolean;
    position: Position;
}

// Plantilla inicial

const jugador1: Jugador = {
    nombre: "James rodriguez",
    club: "Seleccion colombia",
    dorsal: 10,
    activo: true,
    position: { linea: "medio campo", rol: "caminar" }
}

const jugador2: Jugador = {
    nombre: "Falcao",
    club: "Seleccion colombia",
    dorsal: 9,
    activo: true,
    position: { linea: "delantero", rol: "hacer goles" }
}

const jugador3: Jugador = {
    nombre: "Ronaldo",
    club: "Real madrid",
    dorsal: 9,
    activo: false,
    position: { linea: "delantero", rol: "ser el mejor del mundo" }
}

const jugador4: Jugador = {
    nombre: "Cristiano Ronaldo",
    club: "Manchester United",
    dorsal: 7,
    activo: true,
    position: { linea: "delantero", rol: "anotar goles" }
}

const jugador5: Jugador = {
    nombre: "Messi",
    club: "Inter Miami",
    dorsal: 10,
    activo: true,
    position: { linea: "delantero", rol: "crear juego" }
}

// Logica de negocio: Agreguen otros dos objetos y recórranlos todos.

const jugadores: Jugador[] = [jugador1, jugador2, jugador3, jugador4, jugador5];

for (const j of jugadores) {
    console.log(`${j.nombre} (${j.dorsal}) - ${j.club}`);
    console.log(`  Posición: ${j.position.linea} | Rol: ${j.position.rol}`);
    console.log(`  Estado: ${j.activo ? "Activo" : "Inactivo"}\n`);
}
