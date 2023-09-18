import ILandVehicles from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicles {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando entrega de moto!");
    }
    getCargo(): void {
        console.log("Coletando pacote");
    }
}