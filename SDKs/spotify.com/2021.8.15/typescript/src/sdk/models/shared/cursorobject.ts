import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CursorObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorobject - Find more info on the official Spotify Web API Reference
**/
export class CursorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=after" })
  after?: string;
}
