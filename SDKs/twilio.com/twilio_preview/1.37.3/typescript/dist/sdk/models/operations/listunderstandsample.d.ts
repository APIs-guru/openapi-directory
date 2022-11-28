import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUnderstandSampleServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class ListUnderstandSampleQueryParams extends SpeakeasyBase {
    language?: string;
    pageSize?: number;
}
export declare class ListUnderstandSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUnderstandSampleListUnderstandSampleResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUnderstandSampleListUnderstandSampleResponse extends SpeakeasyBase {
    meta?: ListUnderstandSampleListUnderstandSampleResponseMeta;
    samples?: shared.PreviewUnderstandAssistantTaskSample[];
}
export declare class ListUnderstandSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUnderstandSamplePathParams;
    queryParams: ListUnderstandSampleQueryParams;
    security: ListUnderstandSampleSecurity;
}
export declare class ListUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    listUnderstandSampleResponse?: ListUnderstandSampleListUnderstandSampleResponse;
    statusCode: number;
}
