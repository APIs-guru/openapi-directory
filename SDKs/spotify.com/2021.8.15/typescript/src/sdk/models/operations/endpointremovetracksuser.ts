import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointRemoveTracksUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointRemoveTracksUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointRemoveTracksUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointRemoveTracksUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointRemoveTracksUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointRemoveTracksUserQueryParams;

  @Metadata()
  headers: EndpointRemoveTracksUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointRemoveTracksUserRequestBody;

  @Metadata()
  security: EndpointRemoveTracksUserSecurity;
}


export class EndpointRemoveTracksUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
