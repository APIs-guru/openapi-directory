import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTTRUNK_SERVERS: string[];
export declare class ListTrunkQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListTrunkQueryParams;
    security: ListTrunkSecurity;
}
export declare class ListTrunkListTrunkResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTrunkListTrunkResponse extends SpeakeasyBase {
    meta?: ListTrunkListTrunkResponseMeta;
    trunks?: shared.TrunkingV1Trunk[];
}
export declare class ListTrunkResponse extends SpeakeasyBase {
    contentType: string;
    listTrunkResponse?: ListTrunkListTrunkResponse;
    statusCode: number;
}
