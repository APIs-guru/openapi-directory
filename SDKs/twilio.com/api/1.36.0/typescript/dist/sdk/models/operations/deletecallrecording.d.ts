import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECALLRECORDING_SERVERS: string[];
export declare class DeleteCallRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    sid: string;
}
export declare class DeleteCallRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCallRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCallRecordingPathParams;
    security: DeleteCallRecordingSecurity;
}
export declare class DeleteCallRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
