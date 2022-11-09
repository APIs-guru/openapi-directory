import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTWORKSPACE_SERVERS: string[];
export declare class ListWorkspaceQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
}
export declare class ListWorkspaceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWorkspaceRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListWorkspaceQueryParams;
    security: ListWorkspaceSecurity;
}
export declare class ListWorkspaceListWorkspaceResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWorkspaceListWorkspaceResponse extends SpeakeasyBase {
    meta?: ListWorkspaceListWorkspaceResponseMeta;
    workspaces?: shared.TaskrouterV1Workspace[];
}
export declare class ListWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    listWorkspaceResponse?: ListWorkspaceListWorkspaceResponse;
    statusCode: number;
}
