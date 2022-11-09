import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoRoomSummaryEnumCodecEnum } from "./videoroomsummaryenumcodecenum";
import { VideoRoomSummaryEnumCreatedMethodEnum } from "./videoroomsummaryenumcreatedmethodenum";
import { VideoRoomSummaryEnumEdgeLocationEnum } from "./videoroomsummaryenumedgelocationenum";
import { VideoRoomSummaryEnumEndReasonEnum } from "./videoroomsummaryenumendreasonenum";
import { VideoRoomSummaryEnumTwilioRealmEnum } from "./videoroomsummaryenumtwiliorealmenum";
import { VideoRoomSummaryEnumProcessingStateEnum } from "./videoroomsummaryenumprocessingstateenum";
import { VideoRoomSummaryEnumRoomStatusEnum } from "./videoroomsummaryenumroomstatusenum";
import { VideoRoomSummaryEnumRoomTypeEnum } from "./videoroomsummaryenumroomtypeenum";

export enum InsightsV1VideoRoomSummaryStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class InsightsV1VideoRoomSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=codecs" })
  codecs?: VideoRoomSummaryEnumCodecEnum[];

  @Metadata({ data: "json, name=concurrent_participants" })
  concurrentParticipants?: number;

  @Metadata({ data: "json, name=create_time" })
  createTime?: Date;

  @Metadata({ data: "json, name=created_method" })
  createdMethod?: VideoRoomSummaryEnumCreatedMethodEnum;

  @Metadata({ data: "json, name=duration_sec" })
  durationSec?: number;

  @Metadata({ data: "json, name=edge_location" })
  edgeLocation?: VideoRoomSummaryEnumEdgeLocationEnum;

  @Metadata({ data: "json, name=end_reason" })
  endReason?: VideoRoomSummaryEnumEndReasonEnum;

  @Metadata({ data: "json, name=end_time" })
  endTime?: Date;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=max_concurrent_participants" })
  maxConcurrentParticipants?: number;

  @Metadata({ data: "json, name=max_participants" })
  maxParticipants?: number;

  @Metadata({ data: "json, name=media_region" })
  mediaRegion?: VideoRoomSummaryEnumTwilioRealmEnum;

  @Metadata({ data: "json, name=processing_state" })
  processingState?: VideoRoomSummaryEnumProcessingStateEnum;

  @Metadata({ data: "json, name=recording_enabled" })
  recordingEnabled?: boolean;

  @Metadata({ data: "json, name=room_name" })
  roomName?: string;

  @Metadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @Metadata({ data: "json, name=room_status" })
  roomStatus?: VideoRoomSummaryEnumRoomStatusEnum;

  @Metadata({ data: "json, name=room_type" })
  roomType?: VideoRoomSummaryEnumRoomTypeEnum;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: InsightsV1VideoRoomSummaryStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=total_participant_duration_sec" })
  totalParticipantDurationSec?: number;

  @Metadata({ data: "json, name=total_recording_duration_sec" })
  totalRecordingDurationSec?: number;

  @Metadata({ data: "json, name=unique_participant_identities" })
  uniqueParticipantIdentities?: number;

  @Metadata({ data: "json, name=unique_participants" })
  uniqueParticipants?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
