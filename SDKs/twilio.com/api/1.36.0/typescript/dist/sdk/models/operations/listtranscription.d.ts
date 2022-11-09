import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTTRANSCRIPTION_SERVERS: string[];
export declare class ListTranscriptionPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListTranscriptionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListTranscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTranscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTranscriptionPathParams;
    queryParams: ListTranscriptionQueryParams;
    security: ListTranscriptionSecurity;
}
export declare class ListTranscriptionListTranscriptionResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    transcriptions?: shared.ApiV2010AccountTranscription[];
    uri?: string;
}
export declare class ListTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    listTranscriptionResponse?: ListTranscriptionListTranscriptionResponse;
    statusCode: number;
}
