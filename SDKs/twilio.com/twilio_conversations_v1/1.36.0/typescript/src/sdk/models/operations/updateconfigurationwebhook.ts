import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONFIGURATIONWEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateConfigurationWebhookUpdateConfigurationWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Filters;" })
  filters?: string[];

  @Metadata({ data: "form, name=Method;" })
  method?: string;

  @Metadata({ data: "form, name=PostWebhookUrl;" })
  postWebhookUrl?: string;

  @Metadata({ data: "form, name=PreWebhookUrl;" })
  preWebhookUrl?: string;

  @Metadata({ data: "form, name=Target;" })
  target?: shared.ConfigurationWebhookEnumTargetEnum;
}


export class UpdateConfigurationWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConfigurationWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConfigurationWebhookUpdateConfigurationWebhookRequest;

  @Metadata()
  security: UpdateConfigurationWebhookSecurity;
}


export class UpdateConfigurationWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ConfigurationConfigurationWebhook?: shared.ConversationsV1ConfigurationConfigurationWebhook;
}
