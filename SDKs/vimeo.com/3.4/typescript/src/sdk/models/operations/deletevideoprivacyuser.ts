import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideoPrivacyUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class DeleteVideoPrivacyUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVideoPrivacyUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideoPrivacyUserPathParams;

  @Metadata()
  security: DeleteVideoPrivacyUserSecurity;
}


export class DeleteVideoPrivacyUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
