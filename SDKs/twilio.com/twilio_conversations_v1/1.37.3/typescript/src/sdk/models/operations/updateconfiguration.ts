import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateConfigurationServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateConfigurationUpdateConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DefaultChatServiceSid;" })
  defaultChatServiceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultClosedTimer;" })
  defaultClosedTimer?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultInactiveTimer;" })
  defaultInactiveTimer?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultMessagingServiceSid;" })
  defaultMessagingServiceSid?: string;
}


export class UpdateConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConfigurationUpdateConfigurationRequest;

  @SpeakeasyMetadata()
  security: UpdateConfigurationSecurity;
}


export class UpdateConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1Configuration?: shared.ConversationsV1Configuration;
}
