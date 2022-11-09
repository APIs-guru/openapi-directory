import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointRemoveTracksPlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointRemoveTracksPlaylistHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointRemoveTracksPlaylistRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=snapshot_id" })
  snapshotId?: string;

  @Metadata({ data: "json, name=tracks" })
  tracks: string[];
}


export class EndpointRemoveTracksPlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointRemoveTracksPlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointRemoveTracksPlaylistPathParams;

  @Metadata()
  headers: EndpointRemoveTracksPlaylistHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: EndpointRemoveTracksPlaylistRequestBody;

  @Metadata()
  security: EndpointRemoveTracksPlaylistSecurity;
}


export class EndpointRemoveTracksPlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  snapshotIdObject?: shared.SnapshotIdObject;

  @Metadata()
  statusCode: number;
}
