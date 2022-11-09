import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointFollowPlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointFollowPlaylistHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointFollowPlaylistRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=public" })
  public?: boolean;
}


export class EndpointFollowPlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointFollowPlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointFollowPlaylistPathParams;

  @Metadata()
  headers: EndpointFollowPlaylistHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointFollowPlaylistRequestBody;

  @Metadata()
  security: EndpointFollowPlaylistSecurity;
}


export class EndpointFollowPlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
