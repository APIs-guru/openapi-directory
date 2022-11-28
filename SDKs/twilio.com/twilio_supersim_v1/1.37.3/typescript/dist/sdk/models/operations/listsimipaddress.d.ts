import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSimIpAddressServerList: readonly ["https://supersim.twilio.com"];
export declare class ListSimIpAddressPathParams extends SpeakeasyBase {
    simSid: string;
}
export declare class ListSimIpAddressQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSimIpAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSimIpAddressListSimIpAddressResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSimIpAddressListSimIpAddressResponse extends SpeakeasyBase {
    ipAddresses?: shared.SupersimV1SimSimIpAddress[];
    meta?: ListSimIpAddressListSimIpAddressResponseMeta;
}
export declare class ListSimIpAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSimIpAddressPathParams;
    queryParams: ListSimIpAddressQueryParams;
    security: ListSimIpAddressSecurity;
}
export declare class ListSimIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    listSimIpAddressResponse?: ListSimIpAddressListSimIpAddressResponse;
    statusCode: number;
}
