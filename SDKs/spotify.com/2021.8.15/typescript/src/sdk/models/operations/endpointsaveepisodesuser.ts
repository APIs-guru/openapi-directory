import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointSaveEpisodesUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;
}


export class EndpointSaveEpisodesUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;
}


export class EndpointSaveEpisodesUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];
}


export class EndpointSaveEpisodesUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointSaveEpisodesUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointSaveEpisodesUserQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointSaveEpisodesUserHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EndpointSaveEpisodesUserRequestBody;

  @SpeakeasyMetadata()
  security: EndpointSaveEpisodesUserSecurity;
}


export class EndpointSaveEpisodesUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
