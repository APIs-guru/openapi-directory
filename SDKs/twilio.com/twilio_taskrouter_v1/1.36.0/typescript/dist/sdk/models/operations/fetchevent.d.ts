import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHEVENT_SERVERS: string[];
export declare class FetchEventPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class FetchEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEventPathParams;
    security: FetchEventSecurity;
}
export declare class FetchEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceEvent?: shared.TaskrouterV1WorkspaceEvent;
}
