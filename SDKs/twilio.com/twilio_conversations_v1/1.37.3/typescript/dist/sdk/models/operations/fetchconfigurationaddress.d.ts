import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConfigurationAddressPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchConfigurationAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConfigurationAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConfigurationAddressPathParams;
    security: FetchConfigurationAddressSecurity;
}
export declare class FetchConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConfigurationAddress?: shared.ConversationsV1ConfigurationAddress;
}
