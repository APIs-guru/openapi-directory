import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-errorobject - Find more info on the official Spotify Web API Reference
**/
export class ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}
