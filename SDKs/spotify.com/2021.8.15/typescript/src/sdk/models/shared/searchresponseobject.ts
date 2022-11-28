import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedAlbumObject } from "./simplifiedalbumobject";
import { ArtistObject } from "./artistobject";
import { SimplifiedEpisodeObject } from "./simplifiedepisodeobject";
import { SimplifiedPlaylistObject } from "./simplifiedplaylistobject";
import { SimplifiedShowObject } from "./simplifiedshowobject";
import { TrackObject } from "./trackobject";



// SearchResponseObjectAlbums
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class SearchResponseObjectAlbums extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedAlbumObject })
  items?: SimplifiedAlbumObject[];

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


// SearchResponseObjectArtists
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class SearchResponseObjectArtists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ArtistObject })
  items?: ArtistObject[];

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


// SearchResponseObjectEpisodes
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class SearchResponseObjectEpisodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedEpisodeObject })
  items?: SimplifiedEpisodeObject[];

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


// SearchResponseObjectPlaylists
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class SearchResponseObjectPlaylists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedPlaylistObject })
  items?: SimplifiedPlaylistObject[];

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


// SearchResponseObjectShows
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class SearchResponseObjectShows extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: SimplifiedShowObject })
  items?: SimplifiedShowObject[];

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


// SearchResponseObjectTracks
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class SearchResponseObjectTracks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: TrackObject })
  items?: TrackObject[];

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


export class SearchResponseObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albums" })
  albums?: SearchResponseObjectAlbums;

  @SpeakeasyMetadata({ data: "json, name=artists" })
  artists?: SearchResponseObjectArtists;

  @SpeakeasyMetadata({ data: "json, name=episodes" })
  episodes?: SearchResponseObjectEpisodes;

  @SpeakeasyMetadata({ data: "json, name=playlists" })
  playlists?: SearchResponseObjectPlaylists;

  @SpeakeasyMetadata({ data: "json, name=shows" })
  shows?: SearchResponseObjectShows;

  @SpeakeasyMetadata({ data: "json, name=tracks" })
  tracks?: SearchResponseObjectTracks;
}
