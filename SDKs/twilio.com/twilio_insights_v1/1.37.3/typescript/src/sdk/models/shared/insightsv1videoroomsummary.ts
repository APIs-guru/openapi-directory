import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoRoomSummaryEnumCodecEnum } from "./videoroomsummaryenumcodecenum";
import { VideoRoomSummaryEnumCreatedMethodEnum } from "./videoroomsummaryenumcreatedmethodenum";
import { VideoRoomSummaryEnumEdgeLocationEnum } from "./videoroomsummaryenumedgelocationenum";
import { VideoRoomSummaryEnumEndReasonEnum } from "./videoroomsummaryenumendreasonenum";
import { VideoRoomSummaryEnumTwilioRealmEnum } from "./videoroomsummaryenumtwiliorealmenum";
import { VideoRoomSummaryEnumProcessingStateEnum } from "./videoroomsummaryenumprocessingstateenum";
import { VideoRoomSummaryEnumRoomStatusEnum } from "./videoroomsummaryenumroomstatusenum";
import { VideoRoomSummaryEnumRoomTypeEnum } from "./videoroomsummaryenumroomtypeenum";


export enum InsightsV1VideoRoomSummaryStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class InsightsV1VideoRoomSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=codecs" })
  codecs?: VideoRoomSummaryEnumCodecEnum[];

  @SpeakeasyMetadata({ data: "json, name=concurrent_participants" })
  concurrentParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=create_time" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_method" })
  createdMethod?: VideoRoomSummaryEnumCreatedMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=duration_sec" })
  durationSec?: number;

  @SpeakeasyMetadata({ data: "json, name=edge_location" })
  edgeLocation?: VideoRoomSummaryEnumEdgeLocationEnum;

  @SpeakeasyMetadata({ data: "json, name=end_reason" })
  endReason?: VideoRoomSummaryEnumEndReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=max_concurrent_participants" })
  maxConcurrentParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=max_participants" })
  maxParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=media_region" })
  mediaRegion?: VideoRoomSummaryEnumTwilioRealmEnum;

  @SpeakeasyMetadata({ data: "json, name=processing_state" })
  processingState?: VideoRoomSummaryEnumProcessingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=recording_enabled" })
  recordingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=room_name" })
  roomName?: string;

  @SpeakeasyMetadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @SpeakeasyMetadata({ data: "json, name=room_status" })
  roomStatus?: VideoRoomSummaryEnumRoomStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=room_type" })
  roomType?: VideoRoomSummaryEnumRoomTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: InsightsV1VideoRoomSummaryStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=total_participant_duration_sec" })
  totalParticipantDurationSec?: number;

  @SpeakeasyMetadata({ data: "json, name=total_recording_duration_sec" })
  totalRecordingDurationSec?: number;

  @SpeakeasyMetadata({ data: "json, name=unique_participant_identities" })
  uniqueParticipantIdentities?: number;

  @SpeakeasyMetadata({ data: "json, name=unique_participants" })
  uniqueParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
