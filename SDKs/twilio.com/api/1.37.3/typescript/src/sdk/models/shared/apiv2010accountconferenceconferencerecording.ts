import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceRecordingEnumSourceEnum } from "./conferencerecordingenumsourceenum";
import { ConferenceRecordingEnumStatusEnum } from "./conferencerecordingenumstatusenum";



export class ApiV2010AccountConferenceConferenceRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: number;

  @SpeakeasyMetadata({ data: "json, name=conference_sid" })
  conferenceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=encryption_details" })
  encryptionDetails?: any;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ConferenceRecordingEnumSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConferenceRecordingEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
