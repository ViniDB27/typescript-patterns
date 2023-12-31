import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class MotorcycleTransport extends Transport {

    protected createTransporte(): IVehicle {
        return new Motorcycle();
    };
}