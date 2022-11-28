import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SegmentObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#segment-object - Find more info on the official Spotify Web API Reference
**/
export class SegmentObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=loudness_end" })
  loudnessEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=loudness_max" })
  loudnessMax?: number;

  @SpeakeasyMetadata({ data: "json, name=loudness_max_time" })
  loudnessMaxTime?: number;

  @SpeakeasyMetadata({ data: "json, name=loudness_start" })
  loudnessStart?: number;

  @SpeakeasyMetadata({ data: "json, name=pitches" })
  pitches?: number[];

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=timbre" })
  timbre?: number[];
}
