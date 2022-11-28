import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUnderstandAssistantServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandAssistantQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListUnderstandAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUnderstandAssistantListUnderstandAssistantResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUnderstandAssistantListUnderstandAssistantResponse extends SpeakeasyBase {
    assistants?: shared.PreviewUnderstandAssistant[];
    meta?: ListUnderstandAssistantListUnderstandAssistantResponseMeta;
}
export declare class ListUnderstandAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListUnderstandAssistantQueryParams;
    security: ListUnderstandAssistantSecurity;
}
export declare class ListUnderstandAssistantResponse extends SpeakeasyBase {
    contentType: string;
    listUnderstandAssistantResponse?: ListUnderstandAssistantListUnderstandAssistantResponse;
    statusCode: number;
}
