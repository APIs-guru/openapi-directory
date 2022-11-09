import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTBUILD_SERVERS: string[];
export declare class ListBuildPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListBuildQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListBuildPathParams;
    queryParams: ListBuildQueryParams;
    security: ListBuildSecurity;
}
export declare class ListBuildListBuildResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListBuildListBuildResponse extends SpeakeasyBase {
    builds?: shared.ServerlessV1ServiceBuild[];
    meta?: ListBuildListBuildResponseMeta;
}
export declare class ListBuildResponse extends SpeakeasyBase {
    contentType: string;
    listBuildResponse?: ListBuildListBuildResponse;
    statusCode: number;
}
