import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListEnvironmentServerList: readonly ["https://serverless.twilio.com"];
export declare class ListEnvironmentPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListEnvironmentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListEnvironmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEnvironmentListEnvironmentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListEnvironmentListEnvironmentResponse extends SpeakeasyBase {
    environments?: shared.ServerlessV1ServiceEnvironment[];
    meta?: ListEnvironmentListEnvironmentResponseMeta;
}
export declare class ListEnvironmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListEnvironmentPathParams;
    queryParams: ListEnvironmentQueryParams;
    security: ListEnvironmentSecurity;
}
export declare class ListEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    listEnvironmentResponse?: ListEnvironmentListEnvironmentResponse;
    statusCode: number;
}
