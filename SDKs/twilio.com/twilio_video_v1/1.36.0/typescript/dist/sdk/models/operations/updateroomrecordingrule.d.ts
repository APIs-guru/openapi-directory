import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEROOMRECORDINGRULE_SERVERS: string[];
export declare class UpdateRoomRecordingRulePathParams extends SpeakeasyBase {
    roomSid: string;
}
export declare class UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest extends SpeakeasyBase {
    rules?: any;
}
export declare class UpdateRoomRecordingRuleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRoomRecordingRuleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateRoomRecordingRulePathParams;
    request?: UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest;
    security: UpdateRoomRecordingRuleSecurity;
}
export declare class UpdateRoomRecordingRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomRecordingRule?: shared.VideoV1RoomRoomRecordingRule;
}
