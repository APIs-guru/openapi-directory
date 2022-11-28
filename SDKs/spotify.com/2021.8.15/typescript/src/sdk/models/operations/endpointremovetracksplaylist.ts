import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointRemoveTracksPlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointRemoveTracksPlaylistHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointRemoveTracksPlaylistRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snapshot_id" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=tracks" })
  tracks: string[];
}


export class EndpointRemoveTracksPlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointRemoveTracksPlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointRemoveTracksPlaylistPathParams;

  @SpeakeasyMetadata()
  headers: EndpointRemoveTracksPlaylistHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: EndpointRemoveTracksPlaylistRequestBody;

  @SpeakeasyMetadata()
  security: EndpointRemoveTracksPlaylistSecurity;
}


export class EndpointRemoveTracksPlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  snapshotIdObject?: shared.SnapshotIdObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
