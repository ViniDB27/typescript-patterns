import ILandVehicles from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicles {
    startRoute(): void {
        this.getCargo();
       console.log("Iniciando a rota de entrega");
    }
    getCargo(): void {
       console.log("Coletando entrega");
    }
}