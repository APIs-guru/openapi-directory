import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedArtistObject } from "./simplifiedartistobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { AlbumRestrictionObject } from "./albumrestrictionobject";



// SimplifiedAlbumObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedalbumobject - Find more info on the official Spotify Web API Reference
**/
export class SimplifiedAlbumObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=album_group" })
  albumGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=album_type" })
  albumType?: string;

  @SpeakeasyMetadata({ data: "json, name=artists", elemType: SimplifiedArtistObject })
  artists?: SimplifiedArtistObject[];

  @SpeakeasyMetadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @SpeakeasyMetadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject })
  images?: ImageObject[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=release_date_precision" })
  releaseDatePrecision?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: AlbumRestrictionObject;

  @SpeakeasyMetadata({ data: "json, name=total_tracks" })
  totalTracks?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
