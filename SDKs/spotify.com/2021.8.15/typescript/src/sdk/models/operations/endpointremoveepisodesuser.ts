import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointRemoveEpisodesUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointRemoveEpisodesUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointRemoveEpisodesUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointRemoveEpisodesUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointRemoveEpisodesUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointRemoveEpisodesUserQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointRemoveEpisodesUserHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointRemoveEpisodesUserRequestBody;

  @SpeakeasyMetadata()
  security: EndpointRemoveEpisodesUserSecurity;
}


export class EndpointRemoveEpisodesUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
