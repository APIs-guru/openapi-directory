import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteChannelPrivacyUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class DeleteChannelPrivacyUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteChannelPrivacyUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteChannelPrivacyUserPathParams;

  @Metadata()
  security: DeleteChannelPrivacyUserSecurity;
}


export class DeleteChannelPrivacyUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
