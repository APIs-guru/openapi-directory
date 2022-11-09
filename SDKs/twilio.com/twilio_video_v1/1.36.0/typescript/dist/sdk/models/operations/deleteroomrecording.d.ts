import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEROOMRECORDING_SERVERS: string[];
export declare class DeleteRoomRecordingPathParams extends SpeakeasyBase {
    roomSid: string;
    sid: string;
}
export declare class DeleteRoomRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteRoomRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteRoomRecordingPathParams;
    security: DeleteRoomRecordingSecurity;
}
export declare class DeleteRoomRecordingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
