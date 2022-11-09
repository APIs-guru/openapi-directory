import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointRemoveShowsUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;
}


export class EndpointRemoveShowsUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointRemoveShowsUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointRemoveShowsUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointRemoveShowsUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointRemoveShowsUserQueryParams;

  @Metadata()
  headers: EndpointRemoveShowsUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointRemoveShowsUserRequestBody;

  @Metadata()
  security: EndpointRemoveShowsUserSecurity;
}


export class EndpointRemoveShowsUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
