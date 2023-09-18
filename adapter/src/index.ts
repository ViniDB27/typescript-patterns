import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayPalPayment from "./paypal/IPaypalPayment";
import Payonner from "./Payonner/Payonner";
import PayPal from "./paypal/PayPal";
import MercadoPago from "./mercadoPago/MercadoPago";
import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";

// const payment: IPayPalPayment = new PayPal();
// const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

payment.paypalPayment();
payment.paypalReceive();