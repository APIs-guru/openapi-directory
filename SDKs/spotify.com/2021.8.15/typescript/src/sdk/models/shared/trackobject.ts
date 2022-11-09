import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimplifiedAlbumObject } from "./simplifiedalbumobject";
import { ArtistObject } from "./artistobject";
import { ExternalIdObject } from "./externalidobject";
import { ExternalUrlObject } from "./externalurlobject";
import { LinkedTrackObject } from "./linkedtrackobject";
import { TrackRestrictionObject } from "./trackrestrictionobject";


// TrackObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-trackobject - Find more info on the official Spotify Web API Reference
**/
export class TrackObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=album" })
  album?: SimplifiedAlbumObject;

  @Metadata({ data: "json, name=artists", elemType: shared.ArtistObject })
  artists?: ArtistObject[];

  @Metadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @Metadata({ data: "json, name=disc_number" })
  discNumber?: number;

  @Metadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @Metadata({ data: "json, name=explicit" })
  explicit?: boolean;

  @Metadata({ data: "json, name=external_ids" })
  externalIds?: ExternalIdObject;

  @Metadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_local" })
  isLocal?: boolean;

  @Metadata({ data: "json, name=is_playable" })
  isPlayable?: boolean;

  @Metadata({ data: "json, name=linked_from" })
  linkedFrom?: LinkedTrackObject;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=popularity" })
  popularity?: number;

  @Metadata({ data: "json, name=preview_url" })
  previewUrl?: string;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: TrackRestrictionObject;

  @Metadata({ data: "json, name=track_number" })
  trackNumber?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
