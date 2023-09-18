import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder {
    private vehicle = new Vehicle();

    reset(): void {
        this.vehicle = new Vehicle();
    }
    getVehicle(): Vehicle {
        const result: Vehicle = this.vehicle;
        this.reset();
        return result;
    }
    addWheel(whell: Wheel) {
       this.vehicle.addWhell(whell);
    }
    setVehicleType(value: VehicleType) {
         this.vehicle.vehicleType = value;
    }
    setSeets(seets: number) {
         this.vehicle.seets = seets;
    }
    setEngine(value: Engine) {
         this.vehicle.engine = value;
    }
    setTrasmission(value: Transmission) {
         this.vehicle.transmission = value;
    }

}