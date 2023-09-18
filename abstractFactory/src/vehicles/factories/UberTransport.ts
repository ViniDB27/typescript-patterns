import Airplane from "../aerial/Airplane";
import IAircraft from "../aerial/interfaces/IAircraft";
import Car from "../land/Car";
import ILandVehicles from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory {
    createTransportVehicle(): ILandVehicles {
        throw new Car();
    }
    createTransportAircraft(): IAircraft {
        throw new Airplane();
    }

}