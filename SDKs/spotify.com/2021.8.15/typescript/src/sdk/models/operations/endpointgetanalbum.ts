import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAnAlbumPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EndpointGetAnAlbumQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointGetAnAlbumHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAnAlbumSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAnAlbumRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetAnAlbumPathParams;

  @Metadata()
  queryParams: EndpointGetAnAlbumQueryParams;

  @Metadata()
  headers: EndpointGetAnAlbumHeaders;

  @Metadata()
  security: EndpointGetAnAlbumSecurity;
}


export class EndpointGetAnAlbumResponse extends SpeakeasyBase {
  @Metadata()
  albumObject?: shared.AlbumObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
