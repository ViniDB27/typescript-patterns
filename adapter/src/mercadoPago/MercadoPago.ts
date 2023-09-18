import Token from "../utils/token";
import IMercadoPago from "./IMercadoPago";

export default class MercadoPago implements IMercadoPago {
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    
    enviarPagamento(): void {
        this.token = this.authToken();
        console.log(`TOKEN: ${this.token.token}`)
        console.log("Enviando pagamento via MercadoPago")
    }

    receberPagamento(): void {
        console.log("Recebendo pagamentos via MercadoPago")
    }

}