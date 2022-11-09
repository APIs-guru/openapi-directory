import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SegmentObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#segment-object - Find more info on the official Spotify Web API Reference
**/
export class SegmentObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=loudness_end" })
  loudnessEnd?: number;

  @Metadata({ data: "json, name=loudness_max" })
  loudnessMax?: number;

  @Metadata({ data: "json, name=loudness_max_time" })
  loudnessMaxTime?: number;

  @Metadata({ data: "json, name=loudness_start" })
  loudnessStart?: number;

  @Metadata({ data: "json, name=pitches" })
  pitches?: number[];

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=timbre" })
  timbre?: number[];
}
