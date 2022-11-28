import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointSaveTracksUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointSaveTracksUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointSaveTracksUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointSaveTracksUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSaveTracksUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointSaveTracksUserQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointSaveTracksUserHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointSaveTracksUserRequestBody;

  @SpeakeasyMetadata()
  security: EndpointSaveTracksUserSecurity;
}


export class EndpointSaveTracksUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
