import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CursorObject } from "./cursorobject";
import { ArtistObject } from "./artistobject";


// FollowingArtistsObjectArtists
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
export class FollowingArtistsObjectArtists extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursors" })
  cursors?: CursorObject;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=items", elemType: shared.ArtistObject })
  items?: ArtistObject[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class FollowingArtistsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=artists" })
  artists?: FollowingArtistsObjectArtists;
}
