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

// Logica de negocio: Agreguen otros dos objetos y recorranlos todos.

const jugadores: Jugador[] = [jugador1, jugador2, jugador3];

for (const j of jugadores) {
    // Implementar recorrido aqui
}
