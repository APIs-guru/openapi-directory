import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ParticipantEnumStatusEnum } from "./participantenumstatusenum";
export declare class ApiV2010AccountConferenceParticipant extends SpeakeasyBase {
    accountSid?: string;
    callSid?: string;
    callSidToCoach?: string;
    coaching?: boolean;
    conferenceSid?: string;
    dateCreated?: string;
    dateUpdated?: string;
    endConferenceOnExit?: boolean;
    hold?: boolean;
    label?: string;
    muted?: boolean;
    startConferenceOnEnter?: boolean;
    status?: ParticipantEnumStatusEnum;
    uri?: string;
}
