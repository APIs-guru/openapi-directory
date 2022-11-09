import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEROOMPARTICIPANTSUBSCRIBERULE_SERVERS: string[];
export declare class UpdateRoomParticipantSubscribeRulePathParams extends SpeakeasyBase {
    participantSid: string;
    roomSid: string;
}
export declare class UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
    rules?: any;
}
export declare class UpdateRoomParticipantSubscribeRuleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateRoomParticipantSubscribeRulePathParams;
    request?: UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest;
    security: UpdateRoomParticipantSubscribeRuleSecurity;
}
export declare class UpdateRoomParticipantSubscribeRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomParticipantRoomParticipantSubscribeRule?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule;
}
