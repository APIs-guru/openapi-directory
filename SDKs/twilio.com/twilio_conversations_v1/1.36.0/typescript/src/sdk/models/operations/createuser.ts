import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUSER_SERVERS = [
	"https://conversations.twilio.com",
];



export class CreateUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.UserEnumWebhookEnabledTypeEnum;
}


export class CreateUserCreateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Identity;" })
  identity: string;

  @Metadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class CreateUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUserRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: CreateUserHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUserCreateUserRequest;

  @Metadata()
  security: CreateUserSecurity;
}


export class CreateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1User?: shared.ConversationsV1User;
}
