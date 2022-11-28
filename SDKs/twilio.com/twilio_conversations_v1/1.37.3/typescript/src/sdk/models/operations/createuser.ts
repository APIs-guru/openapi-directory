import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUserServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.UserEnumWebhookEnabledTypeEnum;
}


export class CreateUserCreateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity: string;

  @SpeakeasyMetadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class CreateUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: CreateUserHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUserCreateUserRequest;

  @SpeakeasyMetadata()
  security: CreateUserSecurity;
}


export class CreateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1User?: shared.ConversationsV1User;
}
