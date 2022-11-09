import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICEWEBHOOKCONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateServiceWebhookConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Filters;" })
  filters?: string[];

  @Metadata({ data: "form, name=Method;" })
  method?: string;

  @Metadata({ data: "form, name=PostWebhookUrl;" })
  postWebhookUrl?: string;

  @Metadata({ data: "form, name=PreWebhookUrl;" })
  preWebhookUrl?: string;
}


export class UpdateServiceWebhookConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceWebhookConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateServiceWebhookConfigurationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest;

  @Metadata()
  security: UpdateServiceWebhookConfigurationSecurity;
}


export class UpdateServiceWebhookConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration?: shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
}
