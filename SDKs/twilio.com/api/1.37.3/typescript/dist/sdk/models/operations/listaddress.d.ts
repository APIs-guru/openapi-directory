import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAddressServerList: readonly ["https://api.twilio.com"];
export declare class ListAddressPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListAddressQueryParams extends SpeakeasyBase {
    customerName?: string;
    friendlyName?: string;
    isoCountry?: string;
    pageSize?: number;
}
export declare class ListAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAddressListAddressResponse extends SpeakeasyBase {
    addresses?: shared.ApiV2010AccountAddress[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAddressPathParams;
    queryParams: ListAddressQueryParams;
    security: ListAddressSecurity;
}
export declare class ListAddressResponse extends SpeakeasyBase {
    contentType: string;
    listAddressResponse?: ListAddressListAddressResponse;
    statusCode: number;
}
