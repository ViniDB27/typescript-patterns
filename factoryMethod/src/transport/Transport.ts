import IVehicle from "./vehicles/intefaces/IVehicle";

export default abstract class Transport {
    startTransport(): void {
        const vehicle = this.createTransporte();

        vehicle.startRoute();
    }

    protected abstract createTransporte(): IVehicle;
}