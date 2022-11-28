import { SpeakeasyBase } from "../../../internal/utils";
import { VideoRoomSummaryEnumCodecEnum } from "./videoroomsummaryenumcodecenum";
import { VideoRoomSummaryEnumCreatedMethodEnum } from "./videoroomsummaryenumcreatedmethodenum";
import { VideoRoomSummaryEnumEdgeLocationEnum } from "./videoroomsummaryenumedgelocationenum";
import { VideoRoomSummaryEnumEndReasonEnum } from "./videoroomsummaryenumendreasonenum";
import { VideoRoomSummaryEnumTwilioRealmEnum } from "./videoroomsummaryenumtwiliorealmenum";
import { VideoRoomSummaryEnumProcessingStateEnum } from "./videoroomsummaryenumprocessingstateenum";
import { VideoRoomSummaryEnumRoomStatusEnum } from "./videoroomsummaryenumroomstatusenum";
import { VideoRoomSummaryEnumRoomTypeEnum } from "./videoroomsummaryenumroomtypeenum";
export declare enum InsightsV1VideoRoomSummaryStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class InsightsV1VideoRoomSummary extends SpeakeasyBase {
    accountSid?: string;
    codecs?: VideoRoomSummaryEnumCodecEnum[];
    concurrentParticipants?: number;
    createTime?: Date;
    createdMethod?: VideoRoomSummaryEnumCreatedMethodEnum;
    durationSec?: number;
    edgeLocation?: VideoRoomSummaryEnumEdgeLocationEnum;
    endReason?: VideoRoomSummaryEnumEndReasonEnum;
    endTime?: Date;
    links?: Map<string, any>;
    maxConcurrentParticipants?: number;
    maxParticipants?: number;
    mediaRegion?: VideoRoomSummaryEnumTwilioRealmEnum;
    processingState?: VideoRoomSummaryEnumProcessingStateEnum;
    recordingEnabled?: boolean;
    roomName?: string;
    roomSid?: string;
    roomStatus?: VideoRoomSummaryEnumRoomStatusEnum;
    roomType?: VideoRoomSummaryEnumRoomTypeEnum;
    statusCallback?: string;
    statusCallbackMethod?: InsightsV1VideoRoomSummaryStatusCallbackMethodEnum;
    totalParticipantDurationSec?: number;
    totalRecordingDurationSec?: number;
    uniqueParticipantIdentities?: number;
    uniqueParticipants?: number;
    url?: string;
}
