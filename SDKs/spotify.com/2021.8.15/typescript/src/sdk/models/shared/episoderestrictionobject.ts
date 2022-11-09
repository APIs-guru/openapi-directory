import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EpisodeRestrictionObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-episoderestrictionobject - Find more info on the official Spotify Web API Reference
**/
export class EpisodeRestrictionObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
