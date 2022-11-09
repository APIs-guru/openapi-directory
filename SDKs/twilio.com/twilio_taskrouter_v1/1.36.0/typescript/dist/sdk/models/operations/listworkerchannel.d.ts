import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTWORKERCHANNEL_SERVERS: string[];
export declare class ListWorkerChannelPathParams extends SpeakeasyBase {
    workerSid: string;
    workspaceSid: string;
}
export declare class ListWorkerChannelQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListWorkerChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWorkerChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListWorkerChannelPathParams;
    queryParams: ListWorkerChannelQueryParams;
    security: ListWorkerChannelSecurity;
}
export declare class ListWorkerChannelListWorkerChannelResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWorkerChannelListWorkerChannelResponse extends SpeakeasyBase {
    channels?: shared.TaskrouterV1WorkspaceWorkerWorkerChannel[];
    meta?: ListWorkerChannelListWorkerChannelResponseMeta;
}
export declare class ListWorkerChannelResponse extends SpeakeasyBase {
    contentType: string;
    listWorkerChannelResponse?: ListWorkerChannelListWorkerChannelResponse;
    statusCode: number;
}
