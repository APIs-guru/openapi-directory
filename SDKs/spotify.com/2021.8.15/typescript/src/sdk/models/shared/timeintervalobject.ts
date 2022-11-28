import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeIntervalObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#time-interval-object - Find more info on the official Spotify Web API Reference
**/
export class TimeIntervalObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
