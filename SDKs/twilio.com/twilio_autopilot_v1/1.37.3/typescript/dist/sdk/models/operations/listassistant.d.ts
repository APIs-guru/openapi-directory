import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAssistantServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListAssistantQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAssistantListAssistantResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListAssistantListAssistantResponse extends SpeakeasyBase {
    assistants?: shared.AutopilotV1Assistant[];
    meta?: ListAssistantListAssistantResponseMeta;
}
export declare class ListAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListAssistantQueryParams;
    security: ListAssistantSecurity;
}
export declare class ListAssistantResponse extends SpeakeasyBase {
    contentType: string;
    listAssistantResponse?: ListAssistantListAssistantResponse;
    statusCode: number;
}
