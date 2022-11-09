import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTFUNCTIONVERSION_SERVERS: string[];
export declare class ListFunctionVersionPathParams extends SpeakeasyBase {
    functionSid: string;
    serviceSid: string;
}
export declare class ListFunctionVersionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListFunctionVersionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFunctionVersionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListFunctionVersionPathParams;
    queryParams: ListFunctionVersionQueryParams;
    security: ListFunctionVersionSecurity;
}
export declare class ListFunctionVersionListFunctionVersionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFunctionVersionListFunctionVersionResponse extends SpeakeasyBase {
    functionVersions?: shared.ServerlessV1ServiceFunctionFunctionVersion[];
    meta?: ListFunctionVersionListFunctionVersionResponseMeta;
}
export declare class ListFunctionVersionResponse extends SpeakeasyBase {
    contentType: string;
    listFunctionVersionResponse?: ListFunctionVersionListFunctionVersionResponse;
    statusCode: number;
}
