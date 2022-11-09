import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEMEDIARECORDING_SERVERS: string[];
export declare class DeleteMediaRecordingPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteMediaRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteMediaRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteMediaRecordingPathParams;
    security: DeleteMediaRecordingSecurity;
}
export declare class DeleteMediaRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
