import IPlatform from "./Iplatform";

export default class YouTube implements IPlatform {
    constructor() {
        this.configureRMTP();
        console.log("YouTube: Transmissão foi iniciada!");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("YouTube: configurando boradcasting")
    }

    authToken(): void {
        console.log("YouTube: Autorizando a aplicação!")
    }

}