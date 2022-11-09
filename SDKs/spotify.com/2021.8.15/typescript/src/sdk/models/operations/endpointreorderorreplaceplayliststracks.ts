import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointReorderOrReplacePlaylistsTracksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointReorderOrReplacePlaylistsTracksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris?: string;
}


export class EndpointReorderOrReplacePlaylistsTracksHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointReorderOrReplacePlaylistsTracksRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=insert_before" })
  insertBefore?: number;

  @Metadata({ data: "json, name=range_length" })
  rangeLength?: number;

  @Metadata({ data: "json, name=range_start" })
  rangeStart?: number;

  @Metadata({ data: "json, name=snapshot_id" })
  snapshotId?: string;

  @Metadata({ data: "json, name=uris" })
  uris?: string[];
}


export class EndpointReorderOrReplacePlaylistsTracksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointReorderOrReplacePlaylistsTracksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointReorderOrReplacePlaylistsTracksPathParams;

  @Metadata()
  queryParams: EndpointReorderOrReplacePlaylistsTracksQueryParams;

  @Metadata()
  headers: EndpointReorderOrReplacePlaylistsTracksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointReorderOrReplacePlaylistsTracksRequestBody;

  @Metadata()
  security: EndpointReorderOrReplacePlaylistsTracksSecurity;
}


export class EndpointReorderOrReplacePlaylistsTracksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  snapshotIdObject?: shared.SnapshotIdObject;

  @Metadata()
  statusCode: number;
}
