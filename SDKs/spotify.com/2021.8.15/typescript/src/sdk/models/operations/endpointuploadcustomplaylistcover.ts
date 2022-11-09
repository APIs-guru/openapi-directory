import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointUploadCustomPlaylistCoverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointUploadCustomPlaylistCoverHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointUploadCustomPlaylistCoverSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointUploadCustomPlaylistCoverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointUploadCustomPlaylistCoverPathParams;

  @Metadata()
  headers: EndpointUploadCustomPlaylistCoverHeaders;

  @Metadata({ data: "request, media_type=image/jpeg" })
  request: string;

  @Metadata()
  security: EndpointUploadCustomPlaylistCoverSecurity;
}


export class EndpointUploadCustomPlaylistCoverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
