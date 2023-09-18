import IAircraft from "../../aerial/interfaces/IAircraft";
import ILandVehicles from "../../land/interfaces/ILandVehicle";

export default interface ITransportFactory {
    createTransportVehicle(): ILandVehicles;
    createTransportAircraft(): IAircraft;
}