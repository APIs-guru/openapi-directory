import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoNonPublicMetrics
/** 
 * Nonpublic engagement metrics for the Media at the time of the request.
**/
export class VideoNonPublicMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playback_0_count" })
  playback0Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_100_count" })
  playback100Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_25_count" })
  playback25Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_50_count" })
  playback50Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_75_count" })
  playback75Count?: number;
}


// VideoOrganicMetrics
/** 
 * Organic nonpublic engagement metrics for the Media at the time of the request.
**/
export class VideoOrganicMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playback_0_count" })
  playback0Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_100_count" })
  playback100Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_25_count" })
  playback25Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_50_count" })
  playback50Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_75_count" })
  playback75Count?: number;

  @SpeakeasyMetadata({ data: "json, name=view_count" })
  viewCount?: number;
}


// VideoPromotedMetrics
/** 
 * Promoted nonpublic engagement metrics for the Media at the time of the request.
**/
export class VideoPromotedMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playback_0_count" })
  playback0Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_100_count" })
  playback100Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_25_count" })
  playback25Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_50_count" })
  playback50Count?: number;

  @SpeakeasyMetadata({ data: "json, name=playback_75_count" })
  playback75Count?: number;

  @SpeakeasyMetadata({ data: "json, name=view_count" })
  viewCount?: number;
}


// VideoPublicMetrics
/** 
 * Engagement metrics for the Media at the time of the request.
**/
export class VideoPublicMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=view_count" })
  viewCount?: number;
}

export enum VideoTypeEnum {
    Video = "video"
}


export class Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=media_key" })
  mediaKey?: string;

  @SpeakeasyMetadata({ data: "json, name=non_public_metrics" })
  nonPublicMetrics?: VideoNonPublicMetrics;

  @SpeakeasyMetadata({ data: "json, name=organic_metrics" })
  organicMetrics?: VideoOrganicMetrics;

  @SpeakeasyMetadata({ data: "json, name=preview_image_url" })
  previewImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=promoted_metrics" })
  promotedMetrics?: VideoPromotedMetrics;

  @SpeakeasyMetadata({ data: "json, name=public_metrics" })
  publicMetrics?: VideoPublicMetrics;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: VideoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
