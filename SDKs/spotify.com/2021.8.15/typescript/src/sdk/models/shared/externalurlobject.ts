import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExternalUrlObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-externalurlobject - Find more info on the official Spotify Web API Reference
**/
export class ExternalUrlObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spotify" })
  spotify?: string;
}
