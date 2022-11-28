import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CopyrightObject } from "./copyrightobject";
import { SimplifiedEpisodeObject } from "./simplifiedepisodeobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";



// ShowObjectEpisodes
/** 
 * A list of the show's episodes.
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class ShowObjectEpisodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedEpisodeObject })
  items?: SimplifiedEpisodeObject[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


// ShowObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-showobject - Find more info on the official Spotify Web API Reference
**/
export class ShowObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @SpeakeasyMetadata({ data: "json, name=copyrights", elemType: CopyrightObject })
  copyrights?: CopyrightObject[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=episodes" })
  episodes?: ShowObjectEpisodes;

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
