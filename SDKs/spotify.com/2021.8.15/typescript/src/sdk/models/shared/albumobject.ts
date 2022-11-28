import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistObject } from "./artistobject";
import { CopyrightObject } from "./copyrightobject";
import { ExternalIdObject } from "./externalidobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { AlbumRestrictionObject } from "./albumrestrictionobject";
import { SimplifiedTrackObject } from "./simplifiedtrackobject";



// AlbumObjectTracks
/** 
 * The tracks of the album.
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class AlbumObjectTracks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedTrackObject })
  items?: SimplifiedTrackObject[];

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


// AlbumObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-albumobject - Find more info on the official Spotify Web API Reference
**/
export class AlbumObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=album_type" })
  albumType?: string;

  @SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistObject })
  artists?: ArtistObject[];

  @SpeakeasyMetadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @SpeakeasyMetadata({ data: "json, name=copyrights", elemType: CopyrightObject })
  copyrights?: CopyrightObject[];

  @SpeakeasyMetadata({ data: "json, name=external_ids" })
  externalIds?: ExternalIdObject;

  @SpeakeasyMetadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @SpeakeasyMetadata({ data: "json, name=genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject })
  images?: ImageObject[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=popularity" })
  popularity?: number;

  @SpeakeasyMetadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=release_date_precision" })
  releaseDatePrecision?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: AlbumRestrictionObject;

  @SpeakeasyMetadata({ data: "json, name=total_tracks" })
  totalTracks?: number;

  @SpeakeasyMetadata({ data: "json, name=tracks" })
  tracks?: AlbumObjectTracks;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
