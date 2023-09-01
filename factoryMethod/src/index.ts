import Transport from './transport/Transport'
import CarTransport from './transport/CarTransport'
import MotorcycleTransport from './transport/MotorcycleTransport'
import BikeTransport from './transport/BikeTransport';

declare var process;

let transport: Transport;

if(process.argv.includes("--uber")) {
    transport = new CarTransport();
} else if (process.argv.includes("--log")) {
    transport = new MotorcycleTransport();
} else if(process.argv.includes("--bike")) {
    transport = new BikeTransport();
} else {
    console.log("Selecione uma entrega");
}

if (transport != undefined) {
    transport.startTransport();
}