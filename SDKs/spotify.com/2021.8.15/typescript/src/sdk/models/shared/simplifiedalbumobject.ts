import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimplifiedArtistObject } from "./simplifiedartistobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { AlbumRestrictionObject } from "./albumrestrictionobject";


// SimplifiedAlbumObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedalbumobject - Find more info on the official Spotify Web API Reference
**/
export class SimplifiedAlbumObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=album_group" })
  albumGroup?: string;

  @Metadata({ data: "json, name=album_type" })
  albumType?: string;

  @Metadata({ data: "json, name=artists", elemType: shared.SimplifiedArtistObject })
  artists?: SimplifiedArtistObject[];

  @Metadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @Metadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images", elemType: shared.ImageObject })
  images?: ImageObject[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @Metadata({ data: "json, name=release_date_precision" })
  releaseDatePrecision?: string;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: AlbumRestrictionObject;

  @Metadata({ data: "json, name=total_tracks" })
  totalTracks?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
