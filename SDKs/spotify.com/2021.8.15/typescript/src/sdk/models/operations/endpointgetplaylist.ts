import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetPlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointGetPlaylistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=additional_types" })
  additionalTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetPlaylistHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetPlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetPlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetPlaylistPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetPlaylistQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetPlaylistHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetPlaylistSecurity;
}


export class EndpointGetPlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  playlistObject?: shared.PlaylistObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
