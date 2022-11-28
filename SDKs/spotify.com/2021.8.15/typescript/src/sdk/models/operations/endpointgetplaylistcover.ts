import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetPlaylistCoverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointGetPlaylistCoverHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetPlaylistCoverSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetPlaylistCoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetPlaylistCoverPathParams;

  @SpeakeasyMetadata()
  headers: EndpointGetPlaylistCoverHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetPlaylistCoverSecurity;
}


export class EndpointGetPlaylistCoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata({ elemType: shared.ImageObject })
  imageObjects?: shared.ImageObject[];

  @SpeakeasyMetadata()
  statusCode: number;
}
