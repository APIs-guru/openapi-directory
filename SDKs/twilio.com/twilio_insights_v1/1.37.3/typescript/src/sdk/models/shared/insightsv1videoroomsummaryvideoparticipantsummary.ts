import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoParticipantSummaryEnumCodecEnum } from "./videoparticipantsummaryenumcodecenum";
import { VideoParticipantSummaryEnumEdgeLocationEnum } from "./videoparticipantsummaryenumedgelocationenum";
import { VideoParticipantSummaryEnumTwilioRealmEnum } from "./videoparticipantsummaryenumtwiliorealmenum";
import { VideoParticipantSummaryEnumRoomStatusEnum } from "./videoparticipantsummaryenumroomstatusenum";



export class InsightsV1VideoRoomSummaryVideoParticipantSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=codecs" })
  codecs?: VideoParticipantSummaryEnumCodecEnum[];

  @SpeakeasyMetadata({ data: "json, name=duration_sec" })
  durationSec?: number;

  @SpeakeasyMetadata({ data: "json, name=edge_location" })
  edgeLocation?: VideoParticipantSummaryEnumEdgeLocationEnum;

  @SpeakeasyMetadata({ data: "json, name=end_reason" })
  endReason?: string;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error_code_url" })
  errorCodeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=join_time" })
  joinTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=leave_time" })
  leaveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=media_region" })
  mediaRegion?: VideoParticipantSummaryEnumTwilioRealmEnum;

  @SpeakeasyMetadata({ data: "json, name=participant_identity" })
  participantIdentity?: string;

  @SpeakeasyMetadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=publisher_info" })
  publisherInfo?: any;

  @SpeakeasyMetadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VideoParticipantSummaryEnumRoomStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
