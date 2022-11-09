import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=items", elemType: shared.SimplifiedEpisodeObject })
  items?: SimplifiedEpisodeObject[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


// ShowObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-showobject - Find more info on the official Spotify Web API Reference
**/
export class ShowObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @Metadata({ data: "json, name=copyrights", elemType: shared.CopyrightObject })
  copyrights?: CopyrightObject[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=episodes" })
  episodes?: ShowObjectEpisodes;

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
