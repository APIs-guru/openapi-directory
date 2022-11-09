import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEADDRESS_SERVERS: string[];
export declare class CreateAddressPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class CreateAddressCreateAddressRequest extends SpeakeasyBase {
    autoCorrectAddress?: boolean;
    city: string;
    customerName: string;
    emergencyEnabled?: boolean;
    friendlyName?: string;
    isoCountry: string;
    postalCode: string;
    region: string;
    street: string;
}
export declare class CreateAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateAddressPathParams;
    request?: CreateAddressCreateAddressRequest;
    security: CreateAddressSecurity;
}
export declare class CreateAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountAddress?: shared.ApiV2010AccountAddress;
}
