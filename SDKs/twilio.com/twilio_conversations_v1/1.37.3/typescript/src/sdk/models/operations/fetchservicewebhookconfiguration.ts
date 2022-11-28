import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchServiceWebhookConfigurationServerList = [
	"https://conversations.twilio.com",
] as const;


export class FetchServiceWebhookConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class FetchServiceWebhookConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchServiceWebhookConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchServiceWebhookConfigurationPathParams;

  @SpeakeasyMetadata()
  security: FetchServiceWebhookConfigurationSecurity;
}


export class FetchServiceWebhookConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration?: shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
}
