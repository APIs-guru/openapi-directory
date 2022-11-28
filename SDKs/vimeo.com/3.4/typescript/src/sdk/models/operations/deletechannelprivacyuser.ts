import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteChannelPrivacyUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class DeleteChannelPrivacyUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteChannelPrivacyUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteChannelPrivacyUserPathParams;

  @SpeakeasyMetadata()
  security: DeleteChannelPrivacyUserSecurity;
}


export class DeleteChannelPrivacyUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
