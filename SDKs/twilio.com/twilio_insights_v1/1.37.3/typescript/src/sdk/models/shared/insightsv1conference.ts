import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceEnumConferenceEndReasonEnum } from "./conferenceenumconferenceendreasonenum";
import { ConferenceEnumRegionEnum } from "./conferenceenumregionenum";
import { ConferenceEnumProcessingStateEnum } from "./conferenceenumprocessingstateenum";
import { ConferenceEnumConferenceStatusEnum } from "./conferenceenumconferencestatusenum";
import { ConferenceEnumTagEnum } from "./conferenceenumtagenum";



export class InsightsV1Conference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=conference_sid" })
  conferenceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=connect_duration_seconds" })
  connectDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=create_time" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=detected_issues" })
  detectedIssues?: any;

  @SpeakeasyMetadata({ data: "json, name=duration_seconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=end_reason" })
  endReason?: ConferenceEnumConferenceEndReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ended_by" })
  endedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=max_concurrent_participants" })
  maxConcurrentParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=max_participants" })
  maxParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=mixer_region" })
  mixerRegion?: ConferenceEnumRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=mixer_region_requested" })
  mixerRegionRequested?: ConferenceEnumRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=processing_state" })
  processingState?: ConferenceEnumProcessingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=recording_enabled" })
  recordingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConferenceEnumConferenceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tag_info" })
  tagInfo?: any;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: ConferenceEnumTagEnum[];

  @SpeakeasyMetadata({ data: "json, name=unique_participants" })
  uniqueParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
