import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimplifiedPlaylistObject } from "./simplifiedplaylistobject";


// PlaylistPagingObjectPlaylists
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class PlaylistPagingObjectPlaylists extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=items", elemType: shared.SimplifiedPlaylistObject })
  items?: SimplifiedPlaylistObject[];

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


export class PlaylistPagingObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=playlists" })
  playlists?: PlaylistPagingObjectPlaylists;
}
