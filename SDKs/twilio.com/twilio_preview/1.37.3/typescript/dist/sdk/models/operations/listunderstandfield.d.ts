import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUnderstandFieldServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandFieldPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class ListUnderstandFieldQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListUnderstandFieldSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUnderstandFieldListUnderstandFieldResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUnderstandFieldListUnderstandFieldResponse extends SpeakeasyBase {
    fields?: shared.PreviewUnderstandAssistantTaskField[];
    meta?: ListUnderstandFieldListUnderstandFieldResponseMeta;
}
export declare class ListUnderstandFieldRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUnderstandFieldPathParams;
    queryParams: ListUnderstandFieldQueryParams;
    security: ListUnderstandFieldSecurity;
}
export declare class ListUnderstandFieldResponse extends SpeakeasyBase {
    contentType: string;
    listUnderstandFieldResponse?: ListUnderstandFieldListUnderstandFieldResponse;
    statusCode: number;
}
