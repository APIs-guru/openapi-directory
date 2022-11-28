import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteTranscriptionServerList: readonly ["https://api.twilio.com"];
export declare class DeleteTranscriptionPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteTranscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteTranscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteTranscriptionPathParams;
    security: DeleteTranscriptionSecurity;
}
export declare class DeleteTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
