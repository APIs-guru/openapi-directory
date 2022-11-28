import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListContentServerList: readonly ["https://content.twilio.com"];
export declare class ListContentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListContentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListContentListContentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListContentListContentResponse extends SpeakeasyBase {
    contents?: shared.ContentV1Content[];
    meta?: ListContentListContentResponseMeta;
}
export declare class ListContentRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListContentQueryParams;
    security: ListContentSecurity;
}
export declare class ListContentResponse extends SpeakeasyBase {
    contentType: string;
    listContentResponse?: ListContentListContentResponse;
    statusCode: number;
}
