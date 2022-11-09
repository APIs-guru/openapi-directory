import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETERECORDINGADDONRESULTPAYLOAD_SERVERS: string[];
export declare class DeleteRecordingAddOnResultPayloadPathParams extends SpeakeasyBase {
    accountSid: string;
    addOnResultSid: string;
    referenceSid: string;
    sid: string;
}
export declare class DeleteRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteRecordingAddOnResultPayloadPathParams;
    security: DeleteRecordingAddOnResultPayloadSecurity;
}
export declare class DeleteRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
