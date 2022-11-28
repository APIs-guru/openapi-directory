import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListFieldServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListFieldPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class ListFieldQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListFieldSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFieldListFieldResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFieldListFieldResponse extends SpeakeasyBase {
    fields?: shared.AutopilotV1AssistantTaskField[];
    meta?: ListFieldListFieldResponseMeta;
}
export declare class ListFieldRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListFieldPathParams;
    queryParams: ListFieldQueryParams;
    security: ListFieldSecurity;
}
export declare class ListFieldResponse extends SpeakeasyBase {
    contentType: string;
    listFieldResponse?: ListFieldListFieldResponse;
    statusCode: number;
}
