import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParticipantEnumStatusEnum } from "./participantenumstatusenum";


export class ApiV2010AccountConferenceParticipant extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=call_sid_to_coach" })
  callSidToCoach?: string;

  @Metadata({ data: "json, name=coaching" })
  coaching?: boolean;

  @Metadata({ data: "json, name=conference_sid" })
  conferenceSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=end_conference_on_exit" })
  endConferenceOnExit?: boolean;

  @Metadata({ data: "json, name=hold" })
  hold?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=muted" })
  muted?: boolean;

  @Metadata({ data: "json, name=start_conference_on_enter" })
  startConferenceOnEnter?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: ParticipantEnumStatusEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
