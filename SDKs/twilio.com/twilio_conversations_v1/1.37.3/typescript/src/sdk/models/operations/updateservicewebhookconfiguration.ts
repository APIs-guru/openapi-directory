import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceWebhookConfigurationServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateServiceWebhookConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Filters;" })
  filters?: string[];

  @SpeakeasyMetadata({ data: "form, name=Method;" })
  method?: string;

  @SpeakeasyMetadata({ data: "form, name=PostWebhookUrl;" })
  postWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=PreWebhookUrl;" })
  preWebhookUrl?: string;
}


export class UpdateServiceWebhookConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceWebhookConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServiceWebhookConfigurationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceWebhookConfigurationSecurity;
}


export class UpdateServiceWebhookConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration?: shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
}
