import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTTASKCHANNEL_SERVERS: string[];
export declare class ListTaskChannelPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class ListTaskChannelQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListTaskChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTaskChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTaskChannelPathParams;
    queryParams: ListTaskChannelQueryParams;
    security: ListTaskChannelSecurity;
}
export declare class ListTaskChannelListTaskChannelResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTaskChannelListTaskChannelResponse extends SpeakeasyBase {
    channels?: shared.TaskrouterV1WorkspaceTaskChannel[];
    meta?: ListTaskChannelListTaskChannelResponseMeta;
}
export declare class ListTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    listTaskChannelResponse?: ListTaskChannelListTaskChannelResponse;
    statusCode: number;
}
