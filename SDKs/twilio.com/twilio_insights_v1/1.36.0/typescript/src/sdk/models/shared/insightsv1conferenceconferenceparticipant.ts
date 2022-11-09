import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConferenceParticipantEnumCallDirectionEnum } from "./conferenceparticipantenumcalldirectionenum";
import { ConferenceParticipantEnumCallStatusEnum } from "./conferenceparticipantenumcallstatusenum";
import { ConferenceParticipantEnumCallTypeEnum } from "./conferenceparticipantenumcalltypeenum";
import { ConferenceParticipantEnumRegionEnum } from "./conferenceparticipantenumregionenum";
import { ConferenceParticipantEnumJitterBufferSizeEnum } from "./conferenceparticipantenumjitterbuffersizeenum";
import { ConferenceParticipantEnumRegionEnum } from "./conferenceparticipantenumregionenum";
import { ConferenceParticipantEnumProcessingStateEnum } from "./conferenceparticipantenumprocessingstateenum";


export class InsightsV1ConferenceConferenceParticipant extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=call_direction" })
  callDirection?: ConferenceParticipantEnumCallDirectionEnum;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=call_status" })
  callStatus?: ConferenceParticipantEnumCallStatusEnum;

  @Metadata({ data: "json, name=call_type" })
  callType?: ConferenceParticipantEnumCallTypeEnum;

  @Metadata({ data: "json, name=coached_participants" })
  coachedParticipants?: string[];

  @Metadata({ data: "json, name=conference_region" })
  conferenceRegion?: ConferenceParticipantEnumRegionEnum;

  @Metadata({ data: "json, name=conference_sid" })
  conferenceSid?: string;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=duration_seconds" })
  durationSeconds?: number;

  @Metadata({ data: "json, name=events" })
  events?: any;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=is_coach" })
  isCoach?: boolean;

  @Metadata({ data: "json, name=is_moderator" })
  isModerator?: boolean;

  @Metadata({ data: "json, name=jitter_buffer_size" })
  jitterBufferSize?: ConferenceParticipantEnumJitterBufferSizeEnum;

  @Metadata({ data: "json, name=join_time" })
  joinTime?: Date;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=leave_time" })
  leaveTime?: Date;

  @Metadata({ data: "json, name=metrics" })
  metrics?: any;

  @Metadata({ data: "json, name=outbound_queue_length" })
  outboundQueueLength?: number;

  @Metadata({ data: "json, name=outbound_time_in_queue" })
  outboundTimeInQueue?: number;

  @Metadata({ data: "json, name=participant_region" })
  participantRegion?: ConferenceParticipantEnumRegionEnum;

  @Metadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @Metadata({ data: "json, name=processing_state" })
  processingState?: ConferenceParticipantEnumProcessingStateEnum;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
