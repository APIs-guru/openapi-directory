import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointCheckIfUserFollowsPlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointCheckIfUserFollowsPlaylistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckIfUserFollowsPlaylistHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckIfUserFollowsPlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckIfUserFollowsPlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointCheckIfUserFollowsPlaylistPathParams;

  @Metadata()
  queryParams: EndpointCheckIfUserFollowsPlaylistQueryParams;

  @Metadata()
  headers: EndpointCheckIfUserFollowsPlaylistHeaders;

  @Metadata()
  security: EndpointCheckIfUserFollowsPlaylistSecurity;
}


export class EndpointCheckIfUserFollowsPlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;

  @Metadata()
  endpointCheckIfUserFollowsPlaylist200ApplicationJsonBooleans?: boolean[];
}
