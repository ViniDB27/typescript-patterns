import Transport from "./Transport";
import Car from "./vehicles/car";
import IVehicle from "./vehicles/intefaces/IVehicle";

export default class CarTransport extends Transport {

    protected createTransporte(): IVehicle {
        return new Car();
    };
}