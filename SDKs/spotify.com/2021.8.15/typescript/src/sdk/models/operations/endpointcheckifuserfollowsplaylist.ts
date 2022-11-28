import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointCheckIfUserFollowsPlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointCheckIfUserFollowsPlaylistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointCheckIfUserFollowsPlaylistHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointCheckIfUserFollowsPlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointCheckIfUserFollowsPlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointCheckIfUserFollowsPlaylistPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointCheckIfUserFollowsPlaylistQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointCheckIfUserFollowsPlaylistHeaders;

  @SpeakeasyMetadata()
  security: EndpointCheckIfUserFollowsPlaylistSecurity;
}


export class EndpointCheckIfUserFollowsPlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  endpointCheckIfUserFollowsPlaylist200ApplicationJsonBooleans?: boolean[];
}
