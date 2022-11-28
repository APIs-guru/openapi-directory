import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-imageobject - Find more info on the official Spotify Web API Reference
**/
export class ImageObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
