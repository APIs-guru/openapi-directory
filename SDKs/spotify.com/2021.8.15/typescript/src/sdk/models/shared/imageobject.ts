import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-imageobject - Find more info on the official Spotify Web API Reference
**/
export class ImageObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
