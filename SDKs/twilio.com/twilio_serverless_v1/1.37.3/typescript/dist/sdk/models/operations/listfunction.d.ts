import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListFunctionServerList: readonly ["https://serverless.twilio.com"];
export declare class ListFunctionPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListFunctionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListFunctionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFunctionListFunctionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFunctionListFunctionResponse extends SpeakeasyBase {
    functions?: shared.ServerlessV1ServiceFunction[];
    meta?: ListFunctionListFunctionResponseMeta;
}
export declare class ListFunctionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListFunctionPathParams;
    queryParams: ListFunctionQueryParams;
    security: ListFunctionSecurity;
}
export declare class ListFunctionResponse extends SpeakeasyBase {
    contentType: string;
    listFunctionResponse?: ListFunctionListFunctionResponse;
    statusCode: number;
}
