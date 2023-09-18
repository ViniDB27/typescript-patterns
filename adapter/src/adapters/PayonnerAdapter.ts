import IPayonnerPayment from "../Payonner/IPayonnerPayment";
import IPayPalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/token";

export default class PayonnerAdapter implements IPayPalPayment {

    private token: Token;

    constructor(private payonner: IPayonnerPayment) { }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        this.payonner.sendPayment();
    }
    paypalReceive(): void {
        this.payonner.receivePayment();
    }

}