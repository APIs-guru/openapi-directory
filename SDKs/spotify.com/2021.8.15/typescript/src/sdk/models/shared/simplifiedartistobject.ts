import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExternalUrlObject } from "./externalurlobject";


// SimplifiedArtistObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedartistobject - Find more info on the official Spotify Web API Reference
**/
export class SimplifiedArtistObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
