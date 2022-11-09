import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCOMPOSITIONHOOK_SERVERS: string[];
export declare class ListCompositionHookQueryParams extends SpeakeasyBase {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    enabled?: boolean;
    friendlyName?: string;
    pageSize?: number;
}
export declare class ListCompositionHookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCompositionHookRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListCompositionHookQueryParams;
    security: ListCompositionHookSecurity;
}
export declare class ListCompositionHookListCompositionHookResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCompositionHookListCompositionHookResponse extends SpeakeasyBase {
    compositionHooks?: shared.VideoV1CompositionHook[];
    meta?: ListCompositionHookListCompositionHookResponseMeta;
}
export declare class ListCompositionHookResponse extends SpeakeasyBase {
    contentType: string;
    listCompositionHookResponse?: ListCompositionHookListCompositionHookResponse;
    statusCode: number;
}
