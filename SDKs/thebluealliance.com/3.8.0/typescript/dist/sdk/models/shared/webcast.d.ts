import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebcastTypeEnum {
    Youtube = "youtube",
    Twitch = "twitch",
    Ustream = "ustream",
    Iframe = "iframe",
    Html5 = "html5",
    Rtmp = "rtmp",
    Livestream = "livestream",
    DirectLink = "direct_link",
    Mms = "mms",
    Justin = "justin",
    Stemtv = "stemtv",
    Dacast = "dacast"
}
export declare class Webcast extends SpeakeasyBase {
    channel: string;
    date?: string;
    file?: string;
    type: WebcastTypeEnum;
}
