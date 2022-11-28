import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceEnumReasonConferenceEndedEnum } from "./conferenceenumreasonconferenceendedenum";
import { ConferenceEnumStatusEnum } from "./conferenceenumstatusenum";
export declare class ApiV2010AccountConference extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    callSidEndingConference?: string;
    dateCreated?: string;
    dateUpdated?: string;
    friendlyName?: string;
    reasonConferenceEnded?: ConferenceEnumReasonConferenceEndedEnum;
    region?: string;
    sid?: string;
    status?: ConferenceEnumStatusEnum;
    subresourceUris?: Map<string, any>;
    uri?: string;
}
