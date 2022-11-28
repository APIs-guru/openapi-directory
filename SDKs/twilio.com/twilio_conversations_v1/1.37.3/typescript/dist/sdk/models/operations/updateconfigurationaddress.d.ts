import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConfigurationAddressPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateConfigurationAddressUpdateConfigurationAddressRequest extends SpeakeasyBase {
    autoCreationConversationServiceSid?: string;
    autoCreationEnabled?: boolean;
    autoCreationStudioFlowSid?: string;
    autoCreationStudioRetryCount?: number;
    autoCreationType?: shared.ConfigurationAddressEnumAutoCreationTypeEnum;
    autoCreationWebhookFilters?: string[];
    autoCreationWebhookMethod?: shared.ConfigurationAddressEnumMethodEnum;
    autoCreationWebhookUrl?: string;
    friendlyName?: string;
}
export declare class UpdateConfigurationAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConfigurationAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateConfigurationAddressPathParams;
    request?: UpdateConfigurationAddressUpdateConfigurationAddressRequest;
    security: UpdateConfigurationAddressSecurity;
}
export declare class UpdateConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConfigurationAddress?: shared.ConversationsV1ConfigurationAddress;
}
