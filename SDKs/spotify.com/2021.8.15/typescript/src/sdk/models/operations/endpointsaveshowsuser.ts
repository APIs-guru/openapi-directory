import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointSaveShowsUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointSaveShowsUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSaveShowsUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointSaveShowsUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSaveShowsUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointSaveShowsUserQueryParams;

  @Metadata()
  headers: EndpointSaveShowsUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointSaveShowsUserRequestBody;

  @Metadata()
  security: EndpointSaveShowsUserSecurity;
}


export class EndpointSaveShowsUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
