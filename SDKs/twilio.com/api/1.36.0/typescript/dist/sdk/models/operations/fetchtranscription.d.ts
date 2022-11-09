import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTRANSCRIPTION_SERVERS: string[];
export declare class FetchTranscriptionPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchTranscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTranscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTranscriptionPathParams;
    security: FetchTranscriptionSecurity;
}
export declare class FetchTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountTranscription?: shared.ApiV2010AccountTranscription;
}
