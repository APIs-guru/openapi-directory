import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateConfigurationWebhookServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateConfigurationWebhookUpdateConfigurationWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Filters;" })
  filters?: string[];

  @SpeakeasyMetadata({ data: "form, name=Method;" })
  method?: string;

  @SpeakeasyMetadata({ data: "form, name=PostWebhookUrl;" })
  postWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=PreWebhookUrl;" })
  preWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Target;" })
  target?: shared.ConfigurationWebhookEnumTargetEnum;
}


export class UpdateConfigurationWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConfigurationWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConfigurationWebhookUpdateConfigurationWebhookRequest;

  @SpeakeasyMetadata()
  security: UpdateConfigurationWebhookSecurity;
}


export class UpdateConfigurationWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ConfigurationConfigurationWebhook?: shared.ConversationsV1ConfigurationConfigurationWebhook;
}
