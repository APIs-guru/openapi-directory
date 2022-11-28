import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CursorObject } from "./cursorobject";
import { ArtistObject } from "./artistobject";



// FollowingArtistsObjectArtists
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
export class FollowingArtistsObjectArtists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursors" })
  cursors?: CursorObject;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ArtistObject })
  items?: ArtistObject[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class FollowingArtistsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artists" })
  artists?: FollowingArtistsObjectArtists;
}
