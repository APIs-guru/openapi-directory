import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebcastTypeEnum {
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


export class Webcast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: WebcastTypeEnum;
}
