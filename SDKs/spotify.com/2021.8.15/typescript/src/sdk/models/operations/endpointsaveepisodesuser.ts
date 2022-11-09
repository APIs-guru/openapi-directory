import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointSaveEpisodesUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointSaveEpisodesUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointSaveEpisodesUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointSaveEpisodesUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSaveEpisodesUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointSaveEpisodesUserQueryParams;

  @Metadata()
  headers: EndpointSaveEpisodesUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointSaveEpisodesUserRequestBody;

  @Metadata()
  security: EndpointSaveEpisodesUserSecurity;
}


export class EndpointSaveEpisodesUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
