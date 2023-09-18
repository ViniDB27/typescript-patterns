import IPayonnerPayment from "./Payonner/IPayonnerPayment";
import Payonner from "./Payonner/Payonner";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayPalPayment from "./paypal/IPaypalPayment";

// const payment: IPayPalPayment = new PayPal();
const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());

payment.paypalPayment();
payment.paypalReceive();