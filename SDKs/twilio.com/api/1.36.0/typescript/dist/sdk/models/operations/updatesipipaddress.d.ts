import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESIPIPADDRESS_SERVERS: string[];
export declare class UpdateSipIpAddressPathParams extends SpeakeasyBase {
    accountSid: string;
    ipAccessControlListSid: string;
    sid: string;
}
export declare class UpdateSipIpAddressUpdateSipIpAddressRequest extends SpeakeasyBase {
    cidrPrefixLength?: number;
    friendlyName?: string;
    ipAddress?: string;
}
export declare class UpdateSipIpAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSipIpAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSipIpAddressPathParams;
    request?: UpdateSipIpAddressUpdateSipIpAddressRequest;
    security: UpdateSipIpAddressSecurity;
}
export declare class UpdateSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipIpAccessControlListSipIpAddress?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress;
}
