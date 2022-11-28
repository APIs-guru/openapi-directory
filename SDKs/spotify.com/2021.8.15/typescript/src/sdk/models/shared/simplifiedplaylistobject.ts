import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { PublicUserObject } from "./publicuserobject";
import { PlaylistTracksRefObject } from "./playlisttracksrefobject";



// SimplifiedPlaylistObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedplaylistobject - Find more info on the official Spotify Web API Reference
**/
export class SimplifiedPlaylistObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborative" })
  collaborative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

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

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: PublicUserObject;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snapshot_id" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=tracks" })
  tracks?: PlaylistTracksRefObject;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
