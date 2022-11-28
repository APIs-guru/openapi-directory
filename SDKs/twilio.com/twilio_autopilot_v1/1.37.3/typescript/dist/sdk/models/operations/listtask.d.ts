import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListTaskServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class ListTaskQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTaskListTaskResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTaskListTaskResponse extends SpeakeasyBase {
    meta?: ListTaskListTaskResponseMeta;
    tasks?: shared.AutopilotV1AssistantTask[];
}
export declare class ListTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTaskPathParams;
    queryParams: ListTaskQueryParams;
    security: ListTaskSecurity;
}
export declare class ListTaskResponse extends SpeakeasyBase {
    contentType: string;
    listTaskResponse?: ListTaskListTaskResponse;
    statusCode: number;
}
