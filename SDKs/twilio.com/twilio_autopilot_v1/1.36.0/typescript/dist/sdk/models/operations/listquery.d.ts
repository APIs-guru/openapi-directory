import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTQUERY_SERVERS: string[];
export declare class ListQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class ListQueryQueryParams extends SpeakeasyBase {
    dialogueSid?: string;
    language?: string;
    modelBuild?: string;
    pageSize?: number;
    status?: string;
}
export declare class ListQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListQueryPathParams;
    queryParams: ListQueryQueryParams;
    security: ListQuerySecurity;
}
export declare class ListQueryListQueryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListQueryListQueryResponse extends SpeakeasyBase {
    meta?: ListQueryListQueryResponseMeta;
    queries?: shared.AutopilotV1AssistantQuery[];
}
export declare class ListQueryResponse extends SpeakeasyBase {
    contentType: string;
    listQueryResponse?: ListQueryListQueryResponse;
    statusCode: number;
}
