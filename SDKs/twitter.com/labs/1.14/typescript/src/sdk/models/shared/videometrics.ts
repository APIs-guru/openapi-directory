import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoMetrics
/** 
 * Metrics corresponding to a Video.
**/
export class VideoMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=media_key" })
  mediaKey: string;

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
  viewCount: number;
}
