import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointFollowPlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointFollowPlaylistHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointFollowPlaylistRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;
}


export class EndpointFollowPlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointFollowPlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointFollowPlaylistPathParams;

  @SpeakeasyMetadata()
  headers: EndpointFollowPlaylistHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointFollowPlaylistRequestBody;

  @SpeakeasyMetadata()
  security: EndpointFollowPlaylistSecurity;
}


export class EndpointFollowPlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
