import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONFIGURATIONADDRESS_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateConfigurationAddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConfigurationAddressUpdateConfigurationAddressRequest extends SpeakeasyBase {
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
}


export class UpdateConfigurationAddressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConfigurationAddressRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConfigurationAddressPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConfigurationAddressUpdateConfigurationAddressRequest;

  @Metadata()
  security: UpdateConfigurationAddressSecurity;
}


export class UpdateConfigurationAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ConfigurationAddress?: shared.ConversationsV1ConfigurationAddress;
}
