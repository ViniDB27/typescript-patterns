import IVehicle from "./intefaces/IVehicle";

export default class Bike implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("iniciando entrega de Bike");
    }
    getCargo(): void {
       console.log("pegamos o seu pacote!");
    }
    
}