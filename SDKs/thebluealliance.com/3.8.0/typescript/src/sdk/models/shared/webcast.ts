import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebcastTypeEnum {
    Youtube = "youtube"
,    Twitch = "twitch"
,    Ustream = "ustream"
,    Iframe = "iframe"
,    Html5 = "html5"
,    Rtmp = "rtmp"
,    Livestream = "livestream"
,    DirectLink = "direct_link"
,    Mms = "mms"
,    Justin = "justin"
,    Stemtv = "stemtv"
,    Dacast = "dacast"
}


export class Webcast extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=file" })
  file?: string;

  @Metadata({ data: "json, name=type" })
  type: WebcastTypeEnum;
}
