import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/Iplatform";
import Twitch from "./platforms/Twitch";
import YouTube from "./platforms/YouTube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform) {
    console.log("Aguarde...");

    const live = new Live(platform);

    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform: IPlatform) {
    console.log("Aguarde...");

    const live = new AdvancedLive(platform);

    live.broadcasting();
    live.result();
    live.subtitle();
    live.comments();
}

startAdvancedLive(new Twitch());
startLive(new YouTube());
startAdvancedLive(new Facebook());