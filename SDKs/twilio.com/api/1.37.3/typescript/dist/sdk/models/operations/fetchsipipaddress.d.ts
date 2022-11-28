import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSipIpAddressServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipIpAddressPathParams extends SpeakeasyBase {
    accountSid: string;
    ipAccessControlListSid: string;
    sid: string;
}
export declare class FetchSipIpAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipIpAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipIpAddressPathParams;
    security: FetchSipIpAddressSecurity;
}
export declare class FetchSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipIpAccessControlListSipIpAddress?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress;
}
