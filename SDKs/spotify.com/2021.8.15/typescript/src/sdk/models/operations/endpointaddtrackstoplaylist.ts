import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointAddTracksToPlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointAddTracksToPlaylistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris?: string;
}


export class EndpointAddTracksToPlaylistHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointAddTracksToPlaylistRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=uris" })
  uris?: string[];
}


export class EndpointAddTracksToPlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointAddTracksToPlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointAddTracksToPlaylistPathParams;

  @Metadata()
  queryParams: EndpointAddTracksToPlaylistQueryParams;

  @Metadata()
  headers: EndpointAddTracksToPlaylistHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointAddTracksToPlaylistRequestBody;

  @Metadata()
  security: EndpointAddTracksToPlaylistSecurity;
}


export class EndpointAddTracksToPlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  snapshotIdObject?: shared.SnapshotIdObject;

  @Metadata()
  statusCode: number;
}
