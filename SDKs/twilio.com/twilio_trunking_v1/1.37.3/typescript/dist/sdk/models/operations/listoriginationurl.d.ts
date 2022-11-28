import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListOriginationUrlServerList: readonly ["https://trunking.twilio.com"];
export declare class ListOriginationUrlPathParams extends SpeakeasyBase {
    trunkSid: string;
}
export declare class ListOriginationUrlQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListOriginationUrlSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListOriginationUrlListOriginationUrlResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListOriginationUrlListOriginationUrlResponse extends SpeakeasyBase {
    meta?: ListOriginationUrlListOriginationUrlResponseMeta;
    originationUrls?: shared.TrunkingV1TrunkOriginationUrl[];
}
export declare class ListOriginationUrlRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListOriginationUrlPathParams;
    queryParams: ListOriginationUrlQueryParams;
    security: ListOriginationUrlSecurity;
}
export declare class ListOriginationUrlResponse extends SpeakeasyBase {
    contentType: string;
    listOriginationUrlResponse?: ListOriginationUrlListOriginationUrlResponse;
    statusCode: number;
}
