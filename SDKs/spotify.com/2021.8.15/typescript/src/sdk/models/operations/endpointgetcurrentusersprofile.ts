import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetCurrentUsersProfileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetCurrentUsersProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetCurrentUsersProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: EndpointGetCurrentUsersProfileHeaders;

  @Metadata()
  security: EndpointGetCurrentUsersProfileSecurity;
}


export class EndpointGetCurrentUsersProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  privateUserObject?: shared.PrivateUserObject;

  @Metadata()
  statusCode: number;
}
