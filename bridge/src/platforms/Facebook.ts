import IPlatform from "./Iplatform";

export default class Facebook implements IPlatform {
    constructor() {
        this.configureRMTP();
        console.log("Facebook: Transmissão foi iniciada!");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: configurando boradcasting")
    }

    authToken(): void {
        console.log("Facebook: Autorizando a aplicação!")
    }

}