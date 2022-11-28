import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSampleServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class ListSampleQueryParams extends SpeakeasyBase {
    language?: string;
    pageSize?: number;
}
export declare class ListSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSampleListSampleResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSampleListSampleResponse extends SpeakeasyBase {
    meta?: ListSampleListSampleResponseMeta;
    samples?: shared.AutopilotV1AssistantTaskSample[];
}
export declare class ListSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSamplePathParams;
    queryParams: ListSampleQueryParams;
    security: ListSampleSecurity;
}
export declare class ListSampleResponse extends SpeakeasyBase {
    contentType: string;
    listSampleResponse?: ListSampleListSampleResponse;
    statusCode: number;
}
