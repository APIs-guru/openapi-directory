import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TextTrackTypeEnum {
    Captions = "captions"
,    Subtitles = "subtitles"
}


export class TextTrack extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=hls_link" })
  hlsLink: string;

  @Metadata({ data: "json, name=hls_link_expires_time" })
  hlsLinkExpiresTime: string;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=link_expires_time" })
  linkExpiresTime: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: TextTrackTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
