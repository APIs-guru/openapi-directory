import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetPlaylistCoverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: string;
}


export class EndpointGetPlaylistCoverHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetPlaylistCoverSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetPlaylistCoverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetPlaylistCoverPathParams;

  @Metadata()
  headers: EndpointGetPlaylistCoverHeaders;

  @Metadata()
  security: EndpointGetPlaylistCoverSecurity;
}


export class EndpointGetPlaylistCoverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata({ elemType: shared.ImageObject })
  imageObjects?: shared.ImageObject[];

  @Metadata()
  statusCode: number;
}
