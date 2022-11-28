import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=album" })
  album?: SimplifiedAlbumObject;

  @SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistObject })
  artists?: ArtistObject[];

  @SpeakeasyMetadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @SpeakeasyMetadata({ data: "json, name=disc_number" })
  discNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @SpeakeasyMetadata({ data: "json, name=explicit" })
  explicit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=external_ids" })
  externalIds?: ExternalIdObject;

  @SpeakeasyMetadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_local" })
  isLocal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_playable" })
  isPlayable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=linked_from" })
  linkedFrom?: LinkedTrackObject;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=popularity" })
  popularity?: number;

  @SpeakeasyMetadata({ data: "json, name=preview_url" })
  previewUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: TrackRestrictionObject;

  @SpeakeasyMetadata({ data: "json, name=track_number" })
  trackNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
