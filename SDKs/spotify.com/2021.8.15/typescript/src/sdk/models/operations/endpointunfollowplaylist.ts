import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointUnfollowPlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointUnfollowPlaylistHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointUnfollowPlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointUnfollowPlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointUnfollowPlaylistPathParams;

  @Metadata()
  headers: EndpointUnfollowPlaylistHeaders;

  @Metadata()
  security: EndpointUnfollowPlaylistSecurity;
}


export class EndpointUnfollowPlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
