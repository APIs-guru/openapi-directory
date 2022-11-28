import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceParticipantEnumCallDirectionEnum } from "./conferenceparticipantenumcalldirectionenum";
import { ConferenceParticipantEnumCallStatusEnum } from "./conferenceparticipantenumcallstatusenum";
import { ConferenceParticipantEnumCallTypeEnum } from "./conferenceparticipantenumcalltypeenum";
import { ConferenceParticipantEnumRegionEnum } from "./conferenceparticipantenumregionenum";
import { ConferenceParticipantEnumJitterBufferSizeEnum } from "./conferenceparticipantenumjitterbuffersizeenum";
import { ConferenceParticipantEnumProcessingStateEnum } from "./conferenceparticipantenumprocessingstateenum";



export class InsightsV1ConferenceConferenceParticipant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_direction" })
  callDirection?: ConferenceParticipantEnumCallDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_status" })
  callStatus?: ConferenceParticipantEnumCallStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=call_type" })
  callType?: ConferenceParticipantEnumCallTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=coached_participants" })
  coachedParticipants?: string[];

  @SpeakeasyMetadata({ data: "json, name=conference_region" })
  conferenceRegion?: ConferenceParticipantEnumRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=conference_sid" })
  conferenceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=duration_seconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: any;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=is_coach" })
  isCoach?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_moderator" })
  isModerator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jitter_buffer_size" })
  jitterBufferSize?: ConferenceParticipantEnumJitterBufferSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=join_time" })
  joinTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=leave_time" })
  leaveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: any;

  @SpeakeasyMetadata({ data: "json, name=outbound_queue_length" })
  outboundQueueLength?: number;

  @SpeakeasyMetadata({ data: "json, name=outbound_time_in_queue" })
  outboundTimeInQueue?: number;

  @SpeakeasyMetadata({ data: "json, name=participant_region" })
  participantRegion?: ConferenceParticipantEnumRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=processing_state" })
  processingState?: ConferenceParticipantEnumProcessingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
