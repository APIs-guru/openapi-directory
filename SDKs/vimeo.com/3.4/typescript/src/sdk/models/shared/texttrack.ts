import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TextTrackTypeEnum {
    Captions = "captions",
    Subtitles = "subtitles"
}


export class TextTrack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=hls_link" })
  hlsLink: string;

  @SpeakeasyMetadata({ data: "json, name=hls_link_expires_time" })
  hlsLinkExpiresTime: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=link_expires_time" })
  linkExpiresTime: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: TextTrackTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
