import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceConfigurationServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateServiceConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class UpdateServiceConfigurationUpdateServiceConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DefaultChatServiceRoleSid;" })
  defaultChatServiceRoleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultConversationCreatorRoleSid;" })
  defaultConversationCreatorRoleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultConversationRoleSid;" })
  defaultConversationRoleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=ReachabilityEnabled;" })
  reachabilityEnabled?: boolean;
}


export class UpdateServiceConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServiceConfigurationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceConfigurationUpdateServiceConfigurationRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceConfigurationSecurity;
}


export class UpdateServiceConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConfiguration?: shared.ConversationsV1ServiceServiceConfiguration;
}
