import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointRemoveAlbumsUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointRemoveAlbumsUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointRemoveAlbumsUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointRemoveAlbumsUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointRemoveAlbumsUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointRemoveAlbumsUserQueryParams;

  @Metadata()
  headers: EndpointRemoveAlbumsUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointRemoveAlbumsUserRequestBody;

  @Metadata()
  security: EndpointRemoveAlbumsUserSecurity;
}


export class EndpointRemoveAlbumsUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
