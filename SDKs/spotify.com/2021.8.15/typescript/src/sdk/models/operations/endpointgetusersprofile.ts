import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetUsersProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class EndpointGetUsersProfileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetUsersProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetUsersProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetUsersProfilePathParams;

  @Metadata()
  headers: EndpointGetUsersProfileHeaders;

  @Metadata()
  security: EndpointGetUsersProfileSecurity;
}


export class EndpointGetUsersProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  publicUserObject?: shared.PublicUserObject;

  @Metadata()
  statusCode: number;
}
