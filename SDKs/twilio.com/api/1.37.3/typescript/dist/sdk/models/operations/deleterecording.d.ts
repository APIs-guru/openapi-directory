import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteRecordingServerList: readonly ["https://api.twilio.com"];
export declare class DeleteRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteRecordingPathParams;
    security: DeleteRecordingSecurity;
}
export declare class DeleteRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
