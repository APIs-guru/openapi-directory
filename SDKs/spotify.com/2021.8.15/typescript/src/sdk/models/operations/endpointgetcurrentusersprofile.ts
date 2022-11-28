import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetCurrentUsersProfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetCurrentUsersProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetCurrentUsersProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EndpointGetCurrentUsersProfileHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetCurrentUsersProfileSecurity;
}


export class EndpointGetCurrentUsersProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  privateUserObject?: shared.PrivateUserObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
