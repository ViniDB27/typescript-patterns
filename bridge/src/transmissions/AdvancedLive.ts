import IPlatform from "../platforms/Iplatform";
import Live from "./Live";

export default class AdvancedLive extends Live {

    constructor(platform: IPlatform) {
        super(platform);

    }

    subtitle(): void {
        console.log("Legendas ativadas");
    }

    comments(): void {
        console.log("Comentarios ativados");
    }
}