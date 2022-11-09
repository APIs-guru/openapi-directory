import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConferenceEnumConferenceEndReasonEnum } from "./conferenceenumconferenceendreasonenum";
import { ConferenceEnumRegionEnum } from "./conferenceenumregionenum";
import { ConferenceEnumRegionEnum } from "./conferenceenumregionenum";
import { ConferenceEnumProcessingStateEnum } from "./conferenceenumprocessingstateenum";
import { ConferenceEnumConferenceStatusEnum } from "./conferenceenumconferencestatusenum";
import { ConferenceEnumTagEnum } from "./conferenceenumtagenum";


export class InsightsV1Conference extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=conference_sid" })
  conferenceSid?: string;

  @Metadata({ data: "json, name=connect_duration_seconds" })
  connectDurationSeconds?: number;

  @Metadata({ data: "json, name=create_time" })
  createTime?: Date;

  @Metadata({ data: "json, name=detected_issues" })
  detectedIssues?: any;

  @Metadata({ data: "json, name=duration_seconds" })
  durationSeconds?: number;

  @Metadata({ data: "json, name=end_reason" })
  endReason?: ConferenceEnumConferenceEndReasonEnum;

  @Metadata({ data: "json, name=end_time" })
  endTime?: Date;

  @Metadata({ data: "json, name=ended_by" })
  endedBy?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=max_concurrent_participants" })
  maxConcurrentParticipants?: number;

  @Metadata({ data: "json, name=max_participants" })
  maxParticipants?: number;

  @Metadata({ data: "json, name=mixer_region" })
  mixerRegion?: ConferenceEnumRegionEnum;

  @Metadata({ data: "json, name=mixer_region_requested" })
  mixerRegionRequested?: ConferenceEnumRegionEnum;

  @Metadata({ data: "json, name=processing_state" })
  processingState?: ConferenceEnumProcessingStateEnum;

  @Metadata({ data: "json, name=recording_enabled" })
  recordingEnabled?: boolean;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ConferenceEnumConferenceStatusEnum;

  @Metadata({ data: "json, name=tag_info" })
  tagInfo?: any;

  @Metadata({ data: "json, name=tags" })
  tags?: ConferenceEnumTagEnum[];

  @Metadata({ data: "json, name=unique_participants" })
  uniqueParticipants?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
