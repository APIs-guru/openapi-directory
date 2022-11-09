import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUNDERSTANDQUERY_SERVERS: string[];
export declare class ListUnderstandQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class ListUnderstandQueryQueryParams extends SpeakeasyBase {
    language?: string;
    modelBuild?: string;
    pageSize?: number;
    status?: string;
}
export declare class ListUnderstandQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUnderstandQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUnderstandQueryPathParams;
    queryParams: ListUnderstandQueryQueryParams;
    security: ListUnderstandQuerySecurity;
}
export declare class ListUnderstandQueryListUnderstandQueryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUnderstandQueryListUnderstandQueryResponse extends SpeakeasyBase {
    meta?: ListUnderstandQueryListUnderstandQueryResponseMeta;
    queries?: shared.PreviewUnderstandAssistantQuery[];
}
export declare class ListUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    listUnderstandQueryResponse?: ListUnderstandQueryListUnderstandQueryResponse;
    statusCode: number;
}
