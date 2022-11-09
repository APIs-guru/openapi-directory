import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETERECORDINGTRANSCRIPTION_SERVERS: string[];
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
