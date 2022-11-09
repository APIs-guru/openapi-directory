import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlaylistTracksRefObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlisttracksrefobject - Find more info on the official Spotify Web API Reference
**/
export class PlaylistTracksRefObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
