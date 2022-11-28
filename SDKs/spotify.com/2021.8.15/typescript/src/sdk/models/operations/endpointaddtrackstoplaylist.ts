import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointAddTracksToPlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointAddTracksToPlaylistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris?: string;
}


export class EndpointAddTracksToPlaylistHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointAddTracksToPlaylistRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}


export class EndpointAddTracksToPlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointAddTracksToPlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointAddTracksToPlaylistPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointAddTracksToPlaylistQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointAddTracksToPlaylistHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointAddTracksToPlaylistRequestBody;

  @SpeakeasyMetadata()
  security: EndpointAddTracksToPlaylistSecurity;
}


export class EndpointAddTracksToPlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  snapshotIdObject?: shared.SnapshotIdObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
