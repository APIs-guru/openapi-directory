import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-errorobject - Find more info on the official Spotify Web API Reference
**/
export class ErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
