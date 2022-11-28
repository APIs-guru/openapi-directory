import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchAddressServerList: readonly ["https://api.twilio.com"];
export declare class FetchAddressPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAddressPathParams;
    security: FetchAddressSecurity;
}
export declare class FetchAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountAddress?: shared.ApiV2010AccountAddress;
}
