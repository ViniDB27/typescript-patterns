import IVehicle from "./vehicles/interfaces/IVehicle";

export default abstract class Transport {
    startTransport(): void {
        const vehicle = this.createTransporte();

        vehicle.startRoute();
    }

    protected abstract createTransporte(): IVehicle;
}