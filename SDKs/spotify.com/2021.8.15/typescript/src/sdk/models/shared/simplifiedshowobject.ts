import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CopyrightObject } from "./copyrightobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";


// SimplifiedShowObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedshowobject - Find more info on the official Spotify Web API Reference
**/
export class SimplifiedShowObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @Metadata({ data: "json, name=copyrights", elemType: shared.CopyrightObject })
  copyrights?: CopyrightObject[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=explicit" })
  explicit?: boolean;

  @Metadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=html_description" })
  htmlDescription?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images", elemType: shared.ImageObject })
  images?: ImageObject[];

  @Metadata({ data: "json, name=is_externally_hosted" })
  isExternallyHosted?: boolean;

  @Metadata({ data: "json, name=languages" })
  languages?: string[];

  @Metadata({ data: "json, name=media_type" })
  mediaType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
