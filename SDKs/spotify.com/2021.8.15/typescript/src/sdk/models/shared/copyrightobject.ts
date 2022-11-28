import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CopyrightObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-copyrightobject - Find more info on the official Spotify Web API Reference
**/
export class CopyrightObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
