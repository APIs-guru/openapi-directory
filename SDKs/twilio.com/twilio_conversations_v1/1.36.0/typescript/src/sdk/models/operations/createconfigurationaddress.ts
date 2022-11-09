import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECONFIGURATIONADDRESS_SERVERS = [
	"https://conversations.twilio.com",
];



export class CreateConfigurationAddressCreateConfigurationAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Address;" })
  address: string;

  @Metadata({ data: "form, name=AutoCreation.ConversationServiceSid;" })
  autoCreationConversationServiceSid?: string;

  @Metadata({ data: "form, name=AutoCreation.Enabled;" })
  autoCreationEnabled?: boolean;

  @Metadata({ data: "form, name=AutoCreation.StudioFlowSid;" })
  autoCreationStudioFlowSid?: string;

  @Metadata({ data: "form, name=AutoCreation.StudioRetryCount;" })
  autoCreationStudioRetryCount?: number;

  @Metadata({ data: "form, name=AutoCreation.Type;" })
  autoCreationType?: shared.ConfigurationAddressEnumAutoCreationTypeEnum;

  @Metadata({ data: "form, name=AutoCreation.WebhookFilters;" })
  autoCreationWebhookFilters?: string[];

  @Metadata({ data: "form, name=AutoCreation.WebhookMethod;" })
  autoCreationWebhookMethod?: shared.ConfigurationAddressEnumMethodEnum;

  @Metadata({ data: "form, name=AutoCreation.WebhookUrl;" })
  autoCreationWebhookUrl?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Type;" })
  type: shared.ConfigurationAddressEnumTypeEnum;
}


export class CreateConfigurationAddressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConfigurationAddressRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConfigurationAddressCreateConfigurationAddressRequest;

  @Metadata()
  security: CreateConfigurationAddressSecurity;
}


export class CreateConfigurationAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ConfigurationAddress?: shared.ConversationsV1ConfigurationAddress;
}
