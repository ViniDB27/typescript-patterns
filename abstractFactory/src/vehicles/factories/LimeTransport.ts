import Drone from "../aerial/Drone";
import IAircraft from "../aerial/interfaces/IAircraft";
import Patinet from "../land/Patinet";
import ILandVehicles from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicles {
        return new Patinet();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }
}