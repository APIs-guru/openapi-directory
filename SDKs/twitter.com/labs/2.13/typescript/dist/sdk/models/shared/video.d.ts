import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Nonpublic engagement metrics for the Media at the time of the request.
**/
export declare class VideoNonPublicMetrics extends SpeakeasyBase {
    playback0Count?: number;
    playback100Count?: number;
    playback25Count?: number;
    playback50Count?: number;
    playback75Count?: number;
}
/**
 * Organic nonpublic engagement metrics for the Media at the time of the request.
**/
export declare class VideoOrganicMetrics extends SpeakeasyBase {
    playback0Count?: number;
    playback100Count?: number;
    playback25Count?: number;
    playback50Count?: number;
    playback75Count?: number;
    viewCount?: number;
}
/**
 * Promoted nonpublic engagement metrics for the Media at the time of the request.
**/
export declare class VideoPromotedMetrics extends SpeakeasyBase {
    playback0Count?: number;
    playback100Count?: number;
    playback25Count?: number;
    playback50Count?: number;
    playback75Count?: number;
    viewCount?: number;
}
/**
 * Engagement metrics for the Media at the time of the request.
**/
export declare class VideoPublicMetrics extends SpeakeasyBase {
    viewCount?: number;
}
export declare enum VideoTypeEnum {
    Video = "video"
}
export declare class Video extends SpeakeasyBase {
    durationMs?: number;
    height?: number;
    mediaKey?: string;
    nonPublicMetrics?: VideoNonPublicMetrics;
    organicMetrics?: VideoOrganicMetrics;
    previewImageUrl?: string;
    promotedMetrics?: VideoPromotedMetrics;
    publicMetrics?: VideoPublicMetrics;
    type?: VideoTypeEnum;
    width?: number;
}
