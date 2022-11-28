import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteRecordingTranscriptionServerList: readonly ["https://api.twilio.com"];
export declare class DeleteRecordingTranscriptionPathParams extends SpeakeasyBase {
    accountSid: string;
    recordingSid: string;
    sid: string;
}
export declare class DeleteRecordingTranscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteRecordingTranscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteRecordingTranscriptionPathParams;
    security: DeleteRecordingTranscriptionSecurity;
}
export declare class DeleteRecordingTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
