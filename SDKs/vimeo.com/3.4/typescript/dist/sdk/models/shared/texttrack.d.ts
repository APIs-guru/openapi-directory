import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TextTrackTypeEnum {
    Captions = "captions",
    Subtitles = "subtitles"
}
export declare class TextTrack extends SpeakeasyBase {
    active: boolean;
    hlsLink: string;
    hlsLinkExpiresTime: string;
    language: string;
    link: string;
    linkExpiresTime: string;
    name: string;
    type: TextTrackTypeEnum;
    uri: string;
}
