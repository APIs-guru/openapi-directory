import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoNonPublicMetrics
/** 
 * Nonpublic engagement metrics for the Media at the time of the request.
**/
export class VideoNonPublicMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=playback_0_count" })
  playback0Count?: number;

  @Metadata({ data: "json, name=playback_100_count" })
  playback100Count?: number;

  @Metadata({ data: "json, name=playback_25_count" })
  playback25Count?: number;

  @Metadata({ data: "json, name=playback_50_count" })
  playback50Count?: number;

  @Metadata({ data: "json, name=playback_75_count" })
  playback75Count?: number;
}


// VideoOrganicMetrics
/** 
 * Organic nonpublic engagement metrics for the Media at the time of the request.
**/
export class VideoOrganicMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=playback_0_count" })
  playback0Count?: number;

  @Metadata({ data: "json, name=playback_100_count" })
  playback100Count?: number;

  @Metadata({ data: "json, name=playback_25_count" })
  playback25Count?: number;

  @Metadata({ data: "json, name=playback_50_count" })
  playback50Count?: number;

  @Metadata({ data: "json, name=playback_75_count" })
  playback75Count?: number;

  @Metadata({ data: "json, name=view_count" })
  viewCount?: number;
}


// VideoPromotedMetrics
/** 
 * Promoted nonpublic engagement metrics for the Media at the time of the request.
**/
export class VideoPromotedMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=playback_0_count" })
  playback0Count?: number;

  @Metadata({ data: "json, name=playback_100_count" })
  playback100Count?: number;

  @Metadata({ data: "json, name=playback_25_count" })
  playback25Count?: number;

  @Metadata({ data: "json, name=playback_50_count" })
  playback50Count?: number;

  @Metadata({ data: "json, name=playback_75_count" })
  playback75Count?: number;

  @Metadata({ data: "json, name=view_count" })
  viewCount?: number;
}


// VideoPublicMetrics
/** 
 * Engagement metrics for the Media at the time of the request.
**/
export class VideoPublicMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=view_count" })
  viewCount?: number;
}

export enum VideoTypeEnum {
    Video = "video"
}


export class Video extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=media_key" })
  mediaKey?: string;

  @Metadata({ data: "json, name=non_public_metrics" })
  nonPublicMetrics?: VideoNonPublicMetrics;

  @Metadata({ data: "json, name=organic_metrics" })
  organicMetrics?: VideoOrganicMetrics;

  @Metadata({ data: "json, name=preview_image_url" })
  previewImageUrl?: string;

  @Metadata({ data: "json, name=promoted_metrics" })
  promotedMetrics?: VideoPromotedMetrics;

  @Metadata({ data: "json, name=public_metrics" })
  publicMetrics?: VideoPublicMetrics;

  @Metadata({ data: "json, name=type" })
  type?: VideoTypeEnum;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
