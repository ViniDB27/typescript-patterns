import IBuilder from "../builder/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director {

    constructor(
        private builder: IBuilder
    ) { }

    constructSedanCar() {
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeets(5);
        this.builder.setTrasmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1600));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
    }

    constructTruck() {
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeets(3);
        this.builder.setTrasmission(Transmission.AUTOMATIC_SEQUENTIAL);
        this.builder.setEngine(new Engine(13000));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
    }

    constructMotorcylce() {
        this.builder.setVehicleType(VehicleType.MOTORCYCLE);
        this.builder.setSeets(1);
        this.builder.setTrasmission(Transmission.MANUAL);
        this.builder.setEngine(new Engine(150));
        this.builder.addWheel(new Wheel(19));
        this.builder.addWheel(new Wheel(19));
    }

}