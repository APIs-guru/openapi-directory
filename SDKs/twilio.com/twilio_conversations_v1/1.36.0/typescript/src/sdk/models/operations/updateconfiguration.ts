import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateConfigurationUpdateConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DefaultChatServiceSid;" })
  defaultChatServiceSid?: string;

  @Metadata({ data: "form, name=DefaultClosedTimer;" })
  defaultClosedTimer?: string;

  @Metadata({ data: "form, name=DefaultInactiveTimer;" })
  defaultInactiveTimer?: string;

  @Metadata({ data: "form, name=DefaultMessagingServiceSid;" })
  defaultMessagingServiceSid?: string;
}


export class UpdateConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConfigurationUpdateConfigurationRequest;

  @Metadata()
  security: UpdateConfigurationSecurity;
}


export class UpdateConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1Configuration?: shared.ConversationsV1Configuration;
}
