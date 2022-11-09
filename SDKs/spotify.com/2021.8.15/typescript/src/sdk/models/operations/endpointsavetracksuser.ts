import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointSaveTracksUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointSaveTracksUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointSaveTracksUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointSaveTracksUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSaveTracksUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointSaveTracksUserQueryParams;

  @Metadata()
  headers: EndpointSaveTracksUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EndpointSaveTracksUserRequestBody;

  @Metadata()
  security: EndpointSaveTracksUserSecurity;
}


export class EndpointSaveTracksUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
