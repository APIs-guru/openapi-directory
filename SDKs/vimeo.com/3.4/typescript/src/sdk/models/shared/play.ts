import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayProgressiveTypeEnum {
    Source = "source",
    VideoMp4 = "video/mp4",
    VideoWebm = "video/webm",
    Vp6XVideo = "vp6/x-video"
}


export class PlayProgressive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime: string;

  @SpeakeasyMetadata({ data: "json, name=fps" })
  fps: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=link_expiration_time" })
  linkExpirationTime: string;

  @SpeakeasyMetadata({ data: "json, name=log" })
  log?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=md5" })
  md5: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PlayProgressiveTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}

export enum PlayStatusEnum {
    Playable = "playable",
    PurchaseRequired = "purchase_required",
    Restricted = "restricted",
    Unavailable = "unavailable"
}


export class Play extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=progressive", elemType: PlayProgressive })
  progressive?: PlayProgressive[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PlayStatusEnum;
}
