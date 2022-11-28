import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateConfigurationAddressCreateConfigurationAddressRequest extends SpeakeasyBase {
    address: string;
    autoCreationConversationServiceSid?: string;
    autoCreationEnabled?: boolean;
    autoCreationStudioFlowSid?: string;
    autoCreationStudioRetryCount?: number;
    autoCreationType?: shared.ConfigurationAddressEnumAutoCreationTypeEnum;
    autoCreationWebhookFilters?: string[];
    autoCreationWebhookMethod?: shared.ConfigurationAddressEnumMethodEnum;
    autoCreationWebhookUrl?: string;
    friendlyName?: string;
    type: shared.ConfigurationAddressEnumTypeEnum;
}
export declare class CreateConfigurationAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateConfigurationAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateConfigurationAddressCreateConfigurationAddressRequest;
    security: CreateConfigurationAddressSecurity;
}
export declare class CreateConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConfigurationAddress?: shared.ConversationsV1ConfigurationAddress;
}
