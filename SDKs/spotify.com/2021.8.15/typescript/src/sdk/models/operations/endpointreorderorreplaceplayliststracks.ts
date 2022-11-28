import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointReorderOrReplacePlaylistsTracksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointReorderOrReplacePlaylistsTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris?: string;
}


export class EndpointReorderOrReplacePlaylistsTracksHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointReorderOrReplacePlaylistsTracksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insert_before" })
  insertBefore?: number;

  @SpeakeasyMetadata({ data: "json, name=range_length" })
  rangeLength?: number;

  @SpeakeasyMetadata({ data: "json, name=range_start" })
  rangeStart?: number;

  @SpeakeasyMetadata({ data: "json, name=snapshot_id" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}


export class EndpointReorderOrReplacePlaylistsTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointReorderOrReplacePlaylistsTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointReorderOrReplacePlaylistsTracksPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointReorderOrReplacePlaylistsTracksQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointReorderOrReplacePlaylistsTracksHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointReorderOrReplacePlaylistsTracksRequestBody;

  @SpeakeasyMetadata()
  security: EndpointReorderOrReplacePlaylistsTracksSecurity;
}


export class EndpointReorderOrReplacePlaylistsTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  snapshotIdObject?: shared.SnapshotIdObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
