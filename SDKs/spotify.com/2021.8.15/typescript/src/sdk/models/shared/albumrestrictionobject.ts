import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AlbumRestrictionObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-albumrestrictionobject - Find more info on the official Spotify Web API Reference
**/
export class AlbumRestrictionObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
