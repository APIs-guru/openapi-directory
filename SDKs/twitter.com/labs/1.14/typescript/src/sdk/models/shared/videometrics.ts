import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoMetrics
/** 
 * Metrics corresponding to a Video.
**/
export class VideoMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=media_key" })
  mediaKey: string;

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
  viewCount: number;
}
