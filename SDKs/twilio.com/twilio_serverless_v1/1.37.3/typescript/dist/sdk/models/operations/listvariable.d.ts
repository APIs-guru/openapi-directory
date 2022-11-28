import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListVariableServerList: readonly ["https://serverless.twilio.com"];
export declare class ListVariablePathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
}
export declare class ListVariableQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListVariableSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListVariableListVariableResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListVariableListVariableResponse extends SpeakeasyBase {
    meta?: ListVariableListVariableResponseMeta;
    variables?: shared.ServerlessV1ServiceEnvironmentVariable[];
}
export declare class ListVariableRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListVariablePathParams;
    queryParams: ListVariableQueryParams;
    security: ListVariableSecurity;
}
export declare class ListVariableResponse extends SpeakeasyBase {
    contentType: string;
    listVariableResponse?: ListVariableListVariableResponse;
    statusCode: number;
}
