import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHROOMRECORDINGRULE_SERVERS: string[];
export declare class FetchRoomRecordingRulePathParams extends SpeakeasyBase {
    roomSid: string;
}
export declare class FetchRoomRecordingRuleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRoomRecordingRuleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRoomRecordingRulePathParams;
    security: FetchRoomRecordingRuleSecurity;
}
export declare class FetchRoomRecordingRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomRecordingRule?: shared.VideoV1RoomRoomRecordingRule;
}
