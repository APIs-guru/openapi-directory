import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrackRestrictionObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-trackrestrictionobject - Find more info on the official Spotify Web API Reference
**/
export class TrackRestrictionObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
