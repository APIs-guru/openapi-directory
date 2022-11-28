import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackRestrictionObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-trackrestrictionobject - Find more info on the official Spotify Web API Reference
**/
export class TrackRestrictionObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
