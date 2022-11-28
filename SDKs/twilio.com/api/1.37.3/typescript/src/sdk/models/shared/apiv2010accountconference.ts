import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceEnumReasonConferenceEndedEnum } from "./conferenceenumreasonconferenceendedenum";
import { ConferenceEnumStatusEnum } from "./conferenceenumstatusenum";



export class ApiV2010AccountConference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=call_sid_ending_conference" })
  callSidEndingConference?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=reason_conference_ended" })
  reasonConferenceEnded?: ConferenceEnumReasonConferenceEndedEnum;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConferenceEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
