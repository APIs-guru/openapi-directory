import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListWorkflowPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class ListWorkflowQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
}
export declare class ListWorkflowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWorkflowListWorkflowResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWorkflowListWorkflowResponse extends SpeakeasyBase {
    meta?: ListWorkflowListWorkflowResponseMeta;
    workflows?: shared.TaskrouterV1WorkspaceWorkflow[];
}
export declare class ListWorkflowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListWorkflowPathParams;
    queryParams: ListWorkflowQueryParams;
    security: ListWorkflowSecurity;
}
export declare class ListWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    listWorkflowResponse?: ListWorkflowListWorkflowResponse;
    statusCode: number;
}
