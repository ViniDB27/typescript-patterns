import IMercadoPago from "../mercadoPago/IMercadoPago";
import IPayPalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/token";

export default class MercadoPagoAdapter implements IPayPalPayment {

    private token: Token;

    constructor(private payonner: IMercadoPago) { }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        this.payonner.enviarPagamento();
    }
    paypalReceive(): void {
        this.payonner.receberPagamento();
    }

}