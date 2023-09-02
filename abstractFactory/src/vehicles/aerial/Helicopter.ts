import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a rota H")
    }
    getCargo(): void {
        console.log("Pegando a carga aerea H");
    }
    checkWind(): void {
        console.log("Checando as condições para voo H")
    }
    
}