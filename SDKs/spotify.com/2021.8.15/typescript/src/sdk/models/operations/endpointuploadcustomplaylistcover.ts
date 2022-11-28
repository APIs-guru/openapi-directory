import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointUploadCustomPlaylistCoverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointUploadCustomPlaylistCoverHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class EndpointUploadCustomPlaylistCoverSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointUploadCustomPlaylistCoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointUploadCustomPlaylistCoverPathParams;

  @SpeakeasyMetadata()
  headers: EndpointUploadCustomPlaylistCoverHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=image/jpeg" })
  request: string;

  @SpeakeasyMetadata()
  security: EndpointUploadCustomPlaylistCoverSecurity;
}


export class EndpointUploadCustomPlaylistCoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
