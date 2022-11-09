import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExternalIdObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-externalidobject - Find more info on the official Spotify Web API Reference
**/
export class ExternalIdObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=ean" })
  ean?: string;

  @Metadata({ data: "json, name=isrc" })
  isrc?: string;

  @Metadata({ data: "json, name=upc" })
  upc?: string;
}
