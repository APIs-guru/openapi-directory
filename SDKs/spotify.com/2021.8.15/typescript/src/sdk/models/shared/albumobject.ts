import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=items", elemType: shared.SimplifiedTrackObject })
  items?: SimplifiedTrackObject[];

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


// AlbumObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-albumobject - Find more info on the official Spotify Web API Reference
**/
export class AlbumObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=album_type" })
  albumType?: string;

  @Metadata({ data: "json, name=artists", elemType: shared.ArtistObject })
  artists?: ArtistObject[];

  @Metadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @Metadata({ data: "json, name=copyrights", elemType: shared.CopyrightObject })
  copyrights?: CopyrightObject[];

  @Metadata({ data: "json, name=external_ids" })
  externalIds?: ExternalIdObject;

  @Metadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @Metadata({ data: "json, name=genres" })
  genres?: string[];

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images", elemType: shared.ImageObject })
  images?: ImageObject[];

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=popularity" })
  popularity?: number;

  @Metadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @Metadata({ data: "json, name=release_date_precision" })
  releaseDatePrecision?: string;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: AlbumRestrictionObject;

  @Metadata({ data: "json, name=total_tracks" })
  totalTracks?: number;

  @Metadata({ data: "json, name=tracks" })
  tracks?: AlbumObjectTracks;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
