import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCONFIGURATIONADDRESS_SERVERS: string[];
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
