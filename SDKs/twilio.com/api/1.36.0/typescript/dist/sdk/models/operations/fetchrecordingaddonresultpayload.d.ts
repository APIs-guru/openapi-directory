import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHRECORDINGADDONRESULTPAYLOAD_SERVERS: string[];
export declare class FetchRecordingAddOnResultPayloadPathParams extends SpeakeasyBase {
    accountSid: string;
    addOnResultSid: string;
    referenceSid: string;
    sid: string;
}
export declare class FetchRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRecordingAddOnResultPayloadPathParams;
    security: FetchRecordingAddOnResultPayloadSecurity;
}
export declare class FetchRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload?: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload;
}
