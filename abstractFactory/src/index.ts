import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";

const currentCompany = Company.NINENINE

let factory : ITransportFactory;


if (currentCompany == Company.NINENINE) {
    factory = new NineNineTransport();
} else {
    factory = new UberTransport();
}

const client = new Client(factory);

client.startRoute();