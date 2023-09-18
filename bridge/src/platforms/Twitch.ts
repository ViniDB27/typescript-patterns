import IPlatform from "./Iplatform";

export default class Twitch implements IPlatform {
    constructor() {
        this.configureRMTP();
        console.log("Twitch: Transmissão foi iniciada!");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: configurando boradcasting")
    }

    authToken(): void {
        console.log("Twitch: Autorizando a aplicação!")
    }

}