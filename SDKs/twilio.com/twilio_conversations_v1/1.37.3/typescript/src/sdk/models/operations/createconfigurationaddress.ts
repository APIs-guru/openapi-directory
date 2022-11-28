import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateConfigurationAddressServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateConfigurationAddressCreateConfigurationAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Address;" })
  address: string;

  @SpeakeasyMetadata({ data: "form, name=AutoCreation.ConversationServiceSid;" })
  autoCreationConversationServiceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=AutoCreation.Enabled;" })
  autoCreationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=AutoCreation.StudioFlowSid;" })
  autoCreationStudioFlowSid?: string;

  @SpeakeasyMetadata({ data: "form, name=AutoCreation.StudioRetryCount;" })
  autoCreationStudioRetryCount?: number;

  @SpeakeasyMetadata({ data: "form, name=AutoCreation.Type;" })
  autoCreationType?: shared.ConfigurationAddressEnumAutoCreationTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=AutoCreation.WebhookFilters;" })
  autoCreationWebhookFilters?: string[];

  @SpeakeasyMetadata({ data: "form, name=AutoCreation.WebhookMethod;" })
  autoCreationWebhookMethod?: shared.ConfigurationAddressEnumMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=AutoCreation.WebhookUrl;" })
  autoCreationWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Type;" })
  type: shared.ConfigurationAddressEnumTypeEnum;
}


export class CreateConfigurationAddressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConfigurationAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConfigurationAddressCreateConfigurationAddressRequest;

  @SpeakeasyMetadata()
  security: CreateConfigurationAddressSecurity;
}


export class CreateConfigurationAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ConfigurationAddress?: shared.ConversationsV1ConfigurationAddress;
}
