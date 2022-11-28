import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayProgressiveTypeEnum {
    Source = "source",
    VideoMp4 = "video/mp4",
    VideoWebm = "video/webm",
    Vp6XVideo = "vp6/x-video"
}
export declare class PlayProgressive extends SpeakeasyBase {
    createdTime: string;
    fps: number;
    height: number;
    link: string;
    linkExpirationTime: string;
    log?: Map<string, any>;
    md5: string;
    size: number;
    type: PlayProgressiveTypeEnum;
    width: number;
}
export declare enum PlayStatusEnum {
    Playable = "playable",
    PurchaseRequired = "purchase_required",
    Restricted = "restricted",
    Unavailable = "unavailable"
}
export declare class Play extends SpeakeasyBase {
    progressive?: PlayProgressive[];
    status: PlayStatusEnum;
}
