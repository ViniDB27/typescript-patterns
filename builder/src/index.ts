import VehicleBuilder from "./builder/VehicleBuilder";
import Director from "./director/director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder); 

director.constructSedanCar();
const sedan: Vehicle = builder.getVehicle();

console.log(sedan);

director.constructTruck();
const truck: Vehicle = builder.getVehicle();

console.log(truck);