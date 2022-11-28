import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceRecordingEnumSourceEnum } from "./conferencerecordingenumsourceenum";
import { ConferenceRecordingEnumStatusEnum } from "./conferencerecordingenumstatusenum";
export declare class ApiV2010AccountConferenceConferenceRecording extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    callSid?: string;
    channels?: number;
    conferenceSid?: string;
    dateCreated?: string;
    dateUpdated?: string;
    duration?: string;
    encryptionDetails?: any;
    errorCode?: number;
    price?: string;
    priceUnit?: string;
    sid?: string;
    source?: ConferenceRecordingEnumSourceEnum;
    startTime?: string;
    status?: ConferenceRecordingEnumStatusEnum;
    uri?: string;
}
