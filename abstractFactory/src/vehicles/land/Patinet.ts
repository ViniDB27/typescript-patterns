import ILandVehicles from "./interfaces/ILandVehicle";

export default class Patinet implements ILandVehicles {
    startRoute(): void {
        this.getCargo();
       console.log("Iniciando a rota de entrega do Patinet");
    }
    getCargo(): void {
       console.log("Coletando Patinet");
    }
}