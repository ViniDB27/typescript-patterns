import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a rota D")
    }
    getCargo(): void {
        console.log("Pegando a carga aerea D");
    }
    checkWind(): void {
        console.log("Checando as condições para voo D")
    }
    
}