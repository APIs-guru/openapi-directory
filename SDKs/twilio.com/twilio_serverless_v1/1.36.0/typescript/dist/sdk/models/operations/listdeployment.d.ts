import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTDEPLOYMENT_SERVERS: string[];
export declare class ListDeploymentPathParams extends SpeakeasyBase {
    environmentSid: string;
    serviceSid: string;
}
export declare class ListDeploymentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDeploymentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDeploymentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDeploymentPathParams;
    queryParams: ListDeploymentQueryParams;
    security: ListDeploymentSecurity;
}
export declare class ListDeploymentListDeploymentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDeploymentListDeploymentResponse extends SpeakeasyBase {
    deployments?: shared.ServerlessV1ServiceEnvironmentDeployment[];
    meta?: ListDeploymentListDeploymentResponseMeta;
}
export declare class ListDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    listDeploymentResponse?: ListDeploymentListDeploymentResponse;
    statusCode: number;
}
