import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListDataSessionServerList: readonly ["https://wireless.twilio.com"];
export declare class ListDataSessionPathParams extends SpeakeasyBase {
    simSid: string;
}
export declare class ListDataSessionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDataSessionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDataSessionListDataSessionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDataSessionListDataSessionResponse extends SpeakeasyBase {
    dataSessions?: shared.WirelessV1SimDataSession[];
    meta?: ListDataSessionListDataSessionResponseMeta;
}
export declare class ListDataSessionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDataSessionPathParams;
    queryParams: ListDataSessionQueryParams;
    security: ListDataSessionSecurity;
}
export declare class ListDataSessionResponse extends SpeakeasyBase {
    contentType: string;
    listDataSessionResponse?: ListDataSessionListDataSessionResponse;
    statusCode: number;
}
