import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESERVICEUSER_SERVERS = [
	"https://conversations.twilio.com",
];



export class CreateServiceUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class CreateServiceUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceUserEnumWebhookEnabledTypeEnum;
}


export class CreateServiceUserCreateServiceUserRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Identity;" })
  identity: string;

  @Metadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class CreateServiceUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceUserRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateServiceUserPathParams;

  @Metadata()
  headers: CreateServiceUserHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceUserCreateServiceUserRequest;

  @Metadata()
  security: CreateServiceUserSecurity;
}


export class CreateServiceUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceUser?: shared.ConversationsV1ServiceServiceUser;
}
