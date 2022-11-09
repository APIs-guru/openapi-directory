import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimplifiedArtistObject } from "./simplifiedartistobject";
import { ExternalUrlObject } from "./externalurlobject";
import { LinkedTrackObject } from "./linkedtrackobject";
import { TrackRestrictionObject } from "./trackrestrictionobject";


// SimplifiedTrackObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedtrackobject - Find more info on the official Spotify Web API Reference
**/
export class SimplifiedTrackObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=artists", elemType: shared.SimplifiedArtistObject })
  artists?: SimplifiedArtistObject[];

  @Metadata({ data: "json, name=available_markets" })
  availableMarkets?: string[];

  @Metadata({ data: "json, name=disc_number" })
  discNumber?: number;

  @Metadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @Metadata({ data: "json, name=explicit" })
  explicit?: boolean;

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
