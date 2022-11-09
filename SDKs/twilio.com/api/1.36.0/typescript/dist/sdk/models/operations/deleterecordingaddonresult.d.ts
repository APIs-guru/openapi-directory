import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETERECORDINGADDONRESULT_SERVERS: string[];
export declare class DeleteRecordingAddOnResultPathParams extends SpeakeasyBase {
    accountSid: string;
    referenceSid: string;
    sid: string;
}
export declare class DeleteRecordingAddOnResultSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteRecordingAddOnResultRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteRecordingAddOnResultPathParams;
    security: DeleteRecordingAddOnResultSecurity;
}
export declare class DeleteRecordingAddOnResultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
