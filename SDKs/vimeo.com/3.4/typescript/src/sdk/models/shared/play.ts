import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PlayProgressiveTypeEnum {
    Source = "source"
,    VideoMp4 = "video/mp4"
,    VideoWebm = "video/webm"
,    Vp6XVideo = "vp6/x-video"
}


export class PlayProgressive extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime: string;

  @Metadata({ data: "json, name=fps" })
  fps: number;

  @Metadata({ data: "json, name=height" })
  height: number;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=link_expiration_time" })
  linkExpirationTime: string;

  @Metadata({ data: "json, name=log" })
  log?: Map<string, any>;

  @Metadata({ data: "json, name=md5" })
  md5: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=type" })
  type: PlayProgressiveTypeEnum;

  @Metadata({ data: "json, name=width" })
  width: number;
}

export enum PlayStatusEnum {
    Playable = "playable"
,    PurchaseRequired = "purchase_required"
,    Restricted = "restricted"
,    Unavailable = "unavailable"
}


export class Play extends SpeakeasyBase {
  @Metadata({ data: "json, name=progressive", elemType: shared.PlayProgressive })
  progressive?: PlayProgressive[];

  @Metadata({ data: "json, name=status" })
  status: PlayStatusEnum;
}
