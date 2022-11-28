import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExternalIdObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-externalidobject - Find more info on the official Spotify Web API Reference
**/
export class ExternalIdObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ean" })
  ean?: string;

  @SpeakeasyMetadata({ data: "json, name=isrc" })
  isrc?: string;

  @SpeakeasyMetadata({ data: "json, name=upc" })
  upc?: string;
}
