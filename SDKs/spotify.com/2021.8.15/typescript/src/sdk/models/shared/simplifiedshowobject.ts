import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CopyrightObject } from "./copyrightobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";



// SimplifiedShowObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedshowobject - Find more info on the official Spotify Web API Reference
**/
export class SimplifiedShowObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @SpeakeasyMetadata({ data: "json, name=copyrights", elemType: CopyrightObject })
  copyrights?: CopyrightObject[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=explicit" })
  explicit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=html_description" })
  htmlDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject })
  images?: ImageObject[];

  @SpeakeasyMetadata({ data: "json, name=is_externally_hosted" })
  isExternallyHosted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=media_type" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
