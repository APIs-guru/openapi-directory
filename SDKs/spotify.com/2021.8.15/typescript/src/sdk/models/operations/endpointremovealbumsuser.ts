import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointRemoveAlbumsUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointRemoveAlbumsUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointRemoveAlbumsUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointRemoveAlbumsUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointRemoveAlbumsUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointRemoveAlbumsUserQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointRemoveAlbumsUserHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointRemoveAlbumsUserRequestBody;

  @SpeakeasyMetadata()
  security: EndpointRemoveAlbumsUserSecurity;
}


export class EndpointRemoveAlbumsUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
