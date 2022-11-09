import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConferenceEnumReasonConferenceEndedEnum } from "./conferenceenumreasonconferenceendedenum";
import { ConferenceEnumStatusEnum } from "./conferenceenumstatusenum";


export class ApiV2010AccountConference extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=call_sid_ending_conference" })
  callSidEndingConference?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=reason_conference_ended" })
  reasonConferenceEnded?: ConferenceEnumReasonConferenceEndedEnum;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: ConferenceEnumStatusEnum;

  @Metadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
