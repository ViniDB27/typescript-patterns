import Transport from "./Transport";
import Bike from "./vehicles/Bike";
import IVehicle from "./vehicles/intefaces/IVehicle";

export default class BikeTransport extends Transport {

    protected createTransporte(): IVehicle {
        return new Bike();
    };
}