import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a rota")
    }
    getCargo(): void {
        console.log("Pegando a carga aerea");
    }
    checkWind(): void {
        console.log("Checando as condições para voo")
    }
}