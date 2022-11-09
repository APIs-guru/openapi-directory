import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointRemoveEpisodesUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointRemoveEpisodesUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointRemoveEpisodesUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointRemoveEpisodesUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointRemoveEpisodesUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointRemoveEpisodesUserQueryParams;

  @Metadata()
  headers: EndpointRemoveEpisodesUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointRemoveEpisodesUserRequestBody;

  @Metadata()
  security: EndpointRemoveEpisodesUserSecurity;
}


export class EndpointRemoveEpisodesUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
