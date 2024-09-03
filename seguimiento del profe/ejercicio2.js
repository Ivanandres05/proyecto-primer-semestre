Función Semaforo() {
    let estado = "rojo";

    while (true) {
        switch (estado) {
            Caso "Verde":
                alert("Luz Verde: Avanza");
                estado = "amarillo";
                quebrar;

            Caso "Amarillo":
                alert("Luz Amarilla: Precaución");
                estado = "rojo";
                quebrar;

            Caso "Rojo":
                alert("Luz Roja: Distensión");
                estado = "verde";
                quebrar;

            Predeterminado:
                alert("Estado desconocido");
                estado = "rojo";
                quebrar;
        }
    }
}
Semaforo();
