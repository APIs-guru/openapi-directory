import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CursorObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorobject - Find more info on the official Spotify Web API Reference
**/
export class CursorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=after" })
  after?: string;
}
