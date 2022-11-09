import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICECONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateServiceConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class UpdateServiceConfigurationUpdateServiceConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DefaultChatServiceRoleSid;" })
  defaultChatServiceRoleSid?: string;

  @Metadata({ data: "form, name=DefaultConversationCreatorRoleSid;" })
  defaultConversationCreatorRoleSid?: string;

  @Metadata({ data: "form, name=DefaultConversationRoleSid;" })
  defaultConversationRoleSid?: string;

  @Metadata({ data: "form, name=ReachabilityEnabled;" })
  reachabilityEnabled?: boolean;
}


export class UpdateServiceConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateServiceConfigurationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceConfigurationUpdateServiceConfigurationRequest;

  @Metadata()
  security: UpdateServiceConfigurationSecurity;
}


export class UpdateServiceConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceConfiguration?: shared.ConversationsV1ServiceServiceConfiguration;
}
