import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageObject } from "./imageobject";



// CategoryObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-categoryobject - Find more info on the official Spotify Web API Reference
**/
export class CategoryObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=icons", elemType: ImageObject })
  icons?: ImageObject[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
