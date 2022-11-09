import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeIntervalObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#time-interval-object - Find more info on the official Spotify Web API Reference
**/
export class TimeIntervalObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
