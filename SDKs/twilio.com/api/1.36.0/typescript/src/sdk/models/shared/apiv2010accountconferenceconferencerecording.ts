import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConferenceRecordingEnumSourceEnum } from "./conferencerecordingenumsourceenum";
import { ConferenceRecordingEnumStatusEnum } from "./conferencerecordingenumstatusenum";


export class ApiV2010AccountConferenceConferenceRecording extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=channels" })
  channels?: number;

  @Metadata({ data: "json, name=conference_sid" })
  conferenceSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=encryption_details" })
  encryptionDetails?: any;

  @Metadata({ data: "json, name=error_code" })
  errorCode?: number;

  @Metadata({ data: "json, name=price" })
  price?: string;

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=source" })
  source?: ConferenceRecordingEnumSourceEnum;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: ConferenceRecordingEnumStatusEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
