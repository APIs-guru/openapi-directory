import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
import { FollowersObject } from "./followersobject";
import { ImageObject } from "./imageobject";
import { PublicUserObject } from "./publicuserobject";
import { PlaylistTrackObject } from "./playlisttrackobject";



// PlaylistObjectTracks
/** 
 * Information about the tracks of the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class PlaylistObjectTracks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: PlaylistTrackObject })
  items?: PlaylistTrackObject[];

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


// PlaylistObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlistobject - Find more info on the official Spotify Web API Reference
**/
export class PlaylistObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborative" })
  collaborative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers?: FollowersObject;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject })
  images?: ImageObject[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: PublicUserObject;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snapshot_id" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=tracks" })
  tracks?: PlaylistObjectTracks;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
