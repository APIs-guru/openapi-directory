import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointSaveShowsUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointSaveShowsUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointSaveShowsUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointSaveShowsUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSaveShowsUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointSaveShowsUserQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointSaveShowsUserHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointSaveShowsUserRequestBody;

  @SpeakeasyMetadata()
  security: EndpointSaveShowsUserSecurity;
}


export class EndpointSaveShowsUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
