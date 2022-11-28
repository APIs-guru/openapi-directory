import { SpeakeasyBase } from "../../../internal/utils";
import { VideoParticipantSummaryEnumCodecEnum } from "./videoparticipantsummaryenumcodecenum";
import { VideoParticipantSummaryEnumEdgeLocationEnum } from "./videoparticipantsummaryenumedgelocationenum";
import { VideoParticipantSummaryEnumTwilioRealmEnum } from "./videoparticipantsummaryenumtwiliorealmenum";
import { VideoParticipantSummaryEnumRoomStatusEnum } from "./videoparticipantsummaryenumroomstatusenum";
export declare class InsightsV1VideoRoomSummaryVideoParticipantSummary extends SpeakeasyBase {
    accountSid?: string;
    codecs?: VideoParticipantSummaryEnumCodecEnum[];
    durationSec?: number;
    edgeLocation?: VideoParticipantSummaryEnumEdgeLocationEnum;
    endReason?: string;
    errorCode?: number;
    errorCodeUrl?: string;
    joinTime?: Date;
    leaveTime?: Date;
    mediaRegion?: VideoParticipantSummaryEnumTwilioRealmEnum;
    participantIdentity?: string;
    participantSid?: string;
    properties?: any;
    publisherInfo?: any;
    roomSid?: string;
    status?: VideoParticipantSummaryEnumRoomStatusEnum;
    url?: string;
}
