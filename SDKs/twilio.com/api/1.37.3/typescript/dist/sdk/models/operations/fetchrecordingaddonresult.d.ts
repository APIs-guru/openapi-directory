import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRecordingAddOnResultServerList: readonly ["https://api.twilio.com"];
export declare class FetchRecordingAddOnResultPathParams extends SpeakeasyBase {
    accountSid: string;
    referenceSid: string;
    sid: string;
}
export declare class FetchRecordingAddOnResultSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRecordingAddOnResultRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRecordingAddOnResultPathParams;
    security: FetchRecordingAddOnResultSecurity;
}
export declare class FetchRecordingAddOnResultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountRecordingRecordingAddOnResult?: shared.ApiV2010AccountRecordingRecordingAddOnResult;
}
