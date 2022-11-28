import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUnderstandTaskServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class ListUnderstandTaskQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListUnderstandTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUnderstandTaskListUnderstandTaskResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUnderstandTaskListUnderstandTaskResponse extends SpeakeasyBase {
    meta?: ListUnderstandTaskListUnderstandTaskResponseMeta;
    tasks?: shared.PreviewUnderstandAssistantTask[];
}
export declare class ListUnderstandTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUnderstandTaskPathParams;
    queryParams: ListUnderstandTaskQueryParams;
    security: ListUnderstandTaskSecurity;
}
export declare class ListUnderstandTaskResponse extends SpeakeasyBase {
    contentType: string;
    listUnderstandTaskResponse?: ListUnderstandTaskListUnderstandTaskResponse;
    statusCode: number;
}
