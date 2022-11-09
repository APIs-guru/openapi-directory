import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTNETWORK_SERVERS: string[];
export declare class ListNetworkQueryParams extends SpeakeasyBase {
    isoCountry?: string;
    mcc?: string;
    mnc?: string;
    pageSize?: number;
}
export declare class ListNetworkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListNetworkRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListNetworkQueryParams;
    security: ListNetworkSecurity;
}
export declare class ListNetworkListNetworkResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListNetworkListNetworkResponse extends SpeakeasyBase {
    meta?: ListNetworkListNetworkResponseMeta;
    networks?: shared.SupersimV1Network[];
}
export declare class ListNetworkResponse extends SpeakeasyBase {
    contentType: string;
    listNetworkResponse?: ListNetworkListNetworkResponse;
    statusCode: number;
}
