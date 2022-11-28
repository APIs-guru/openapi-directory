import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlaylistTracksRefObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlisttracksrefobject - Find more info on the official Spotify Web API Reference
**/
export class PlaylistTracksRefObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
