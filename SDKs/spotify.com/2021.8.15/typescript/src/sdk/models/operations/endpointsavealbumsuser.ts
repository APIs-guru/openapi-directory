import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointSaveAlbumsUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointSaveAlbumsUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointSaveAlbumsUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointSaveAlbumsUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSaveAlbumsUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointSaveAlbumsUserQueryParams;

  @Metadata()
  headers: EndpointSaveAlbumsUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointSaveAlbumsUserRequestBody;

  @Metadata()
  security: EndpointSaveAlbumsUserSecurity;
}


export class EndpointSaveAlbumsUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
