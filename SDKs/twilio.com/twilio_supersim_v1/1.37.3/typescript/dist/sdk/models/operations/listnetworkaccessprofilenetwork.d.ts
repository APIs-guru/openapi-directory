import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListNetworkAccessProfileNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class ListNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
    networkAccessProfileSid: string;
}
export declare class ListNetworkAccessProfileNetworkQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    meta?: ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta;
    networks?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork[];
}
export declare class ListNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListNetworkAccessProfileNetworkPathParams;
    queryParams: ListNetworkAccessProfileNetworkQueryParams;
    security: ListNetworkAccessProfileNetworkSecurity;
}
export declare class ListNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    contentType: string;
    listNetworkAccessProfileNetworkResponse?: ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse;
    statusCode: number;
}
