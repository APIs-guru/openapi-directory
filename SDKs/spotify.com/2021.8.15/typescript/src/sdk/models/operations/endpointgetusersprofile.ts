import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetUsersProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class EndpointGetUsersProfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetUsersProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetUsersProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetUsersProfilePathParams;

  @SpeakeasyMetadata()
  headers: EndpointGetUsersProfileHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetUsersProfileSecurity;
}


export class EndpointGetUsersProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  publicUserObject?: shared.PublicUserObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
