import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("iniciando entrega");
    }
    getCargo(): void {
       console.log("pegamos o seu pacote!");
    }
    
}