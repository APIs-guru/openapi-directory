import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEADDRESS_SERVERS: string[];
export declare class UpdateAddressPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class UpdateAddressUpdateAddressRequest extends SpeakeasyBase {
    autoCorrectAddress?: boolean;
    city?: string;
    customerName?: string;
    emergencyEnabled?: boolean;
    friendlyName?: string;
    postalCode?: string;
    region?: string;
    street?: string;
}
export declare class UpdateAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateAddressPathParams;
    request?: UpdateAddressUpdateAddressRequest;
    security: UpdateAddressSecurity;
}
export declare class UpdateAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountAddress?: shared.ApiV2010AccountAddress;
}
