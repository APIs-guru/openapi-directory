import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointUnfollowPlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointUnfollowPlaylistHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointUnfollowPlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointUnfollowPlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointUnfollowPlaylistPathParams;

  @SpeakeasyMetadata()
  headers: EndpointUnfollowPlaylistHeaders;

  @SpeakeasyMetadata()
  security: EndpointUnfollowPlaylistSecurity;
}


export class EndpointUnfollowPlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
