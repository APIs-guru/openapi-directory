import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSipIpAddressServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipIpAddressPathParams extends SpeakeasyBase {
    accountSid: string;
    ipAccessControlListSid: string;
}
export declare class CreateSipIpAddressCreateSipIpAddressRequest extends SpeakeasyBase {
    cidrPrefixLength?: number;
    friendlyName: string;
    ipAddress: string;
}
export declare class CreateSipIpAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipIpAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipIpAddressPathParams;
    request?: CreateSipIpAddressCreateSipIpAddressRequest;
    security: CreateSipIpAddressSecurity;
}
export declare class CreateSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipIpAccessControlListSipIpAddress?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress;
}
