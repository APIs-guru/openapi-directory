import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CopyrightObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-copyrightobject - Find more info on the official Spotify Web API Reference
**/
export class CopyrightObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
