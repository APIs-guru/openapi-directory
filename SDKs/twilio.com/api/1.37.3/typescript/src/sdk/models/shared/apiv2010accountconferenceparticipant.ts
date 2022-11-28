import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParticipantEnumStatusEnum } from "./participantenumstatusenum";



export class ApiV2010AccountConferenceParticipant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_sid_to_coach" })
  callSidToCoach?: string;

  @SpeakeasyMetadata({ data: "json, name=coaching" })
  coaching?: boolean;

  @SpeakeasyMetadata({ data: "json, name=conference_sid" })
  conferenceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=end_conference_on_exit" })
  endConferenceOnExit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hold" })
  hold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=muted" })
  muted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_conference_on_enter" })
  startConferenceOnEnter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ParticipantEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
