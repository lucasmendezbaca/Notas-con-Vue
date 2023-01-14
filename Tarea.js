class Tarea {

    constructor (titulo, prioridad = 'low', estado = 'pendiente', fecha = new Date()) {
        this.titulo = titulo
        this.prioridad = prioridad
        this.estado = estado
        this.fecha = fecha 
    }
}

export {Tarea};