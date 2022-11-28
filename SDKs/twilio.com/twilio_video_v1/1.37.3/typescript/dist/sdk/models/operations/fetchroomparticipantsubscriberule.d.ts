import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRoomParticipantSubscribeRuleServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomParticipantSubscribeRulePathParams extends SpeakeasyBase {
    participantSid: string;
    roomSid: string;
}
export declare class FetchRoomParticipantSubscribeRuleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRoomParticipantSubscribeRulePathParams;
    security: FetchRoomParticipantSubscribeRuleSecurity;
}
export declare class FetchRoomParticipantSubscribeRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomParticipantRoomParticipantSubscribeRule?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule;
}
