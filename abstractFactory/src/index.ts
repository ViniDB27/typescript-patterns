import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import LimeTransport from "./vehicles/factories/LimeTransport";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";

const currentCompany = Company.LIME

let factory: ITransportFactory;

if (currentCompany == Company.NINENINE) {
    factory = new NineNineTransport();
} else if (currentCompany == Company.LIME) {
    factory = new LimeTransport();
} else {
    factory = new UberTransport();
}

const client = new Client(factory);

client.startRoute();