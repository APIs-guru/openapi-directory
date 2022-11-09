import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoParticipantSummaryEnumCodecEnum } from "./videoparticipantsummaryenumcodecenum";
import { VideoParticipantSummaryEnumEdgeLocationEnum } from "./videoparticipantsummaryenumedgelocationenum";
import { VideoParticipantSummaryEnumTwilioRealmEnum } from "./videoparticipantsummaryenumtwiliorealmenum";
import { VideoParticipantSummaryEnumRoomStatusEnum } from "./videoparticipantsummaryenumroomstatusenum";


export class InsightsV1VideoRoomSummaryVideoParticipantSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=codecs" })
  codecs?: VideoParticipantSummaryEnumCodecEnum[];

  @Metadata({ data: "json, name=duration_sec" })
  durationSec?: number;

  @Metadata({ data: "json, name=edge_location" })
  edgeLocation?: VideoParticipantSummaryEnumEdgeLocationEnum;

  @Metadata({ data: "json, name=end_reason" })
  endReason?: string;

  @Metadata({ data: "json, name=error_code" })
  errorCode?: number;

  @Metadata({ data: "json, name=error_code_url" })
  errorCodeUrl?: string;

  @Metadata({ data: "json, name=join_time" })
  joinTime?: Date;

  @Metadata({ data: "json, name=leave_time" })
  leaveTime?: Date;

  @Metadata({ data: "json, name=media_region" })
  mediaRegion?: VideoParticipantSummaryEnumTwilioRealmEnum;

  @Metadata({ data: "json, name=participant_identity" })
  participantIdentity?: string;

  @Metadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=publisher_info" })
  publisherInfo?: any;

  @Metadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: VideoParticipantSummaryEnumRoomStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
