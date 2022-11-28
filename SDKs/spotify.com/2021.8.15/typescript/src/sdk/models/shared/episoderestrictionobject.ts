import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EpisodeRestrictionObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-episoderestrictionobject - Find more info on the official Spotify Web API Reference
**/
export class EpisodeRestrictionObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
