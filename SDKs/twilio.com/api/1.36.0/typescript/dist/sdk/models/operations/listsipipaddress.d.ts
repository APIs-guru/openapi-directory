import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSIPIPADDRESS_SERVERS: string[];
export declare class ListSipIpAddressPathParams extends SpeakeasyBase {
    accountSid: string;
    ipAccessControlListSid: string;
}
export declare class ListSipIpAddressQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipIpAddressSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipIpAddressRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipIpAddressPathParams;
    queryParams: ListSipIpAddressQueryParams;
    security: ListSipIpAddressSecurity;
}
export declare class ListSipIpAddressListSipIpAddressResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    ipAddresses?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    listSipIpAddressResponse?: ListSipIpAddressListSipIpAddressResponse;
    statusCode: number;
}
