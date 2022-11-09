import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CallRecordingEnumSourceEnum } from "./callrecordingenumsourceenum";
import { CallRecordingEnumStatusEnum } from "./callrecordingenumstatusenum";
export declare class ApiV2010AccountCallCallRecording extends SpeakeasyBase {
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
    price?: number;
    priceUnit?: string;
    sid?: string;
    source?: CallRecordingEnumSourceEnum;
    startTime?: string;
    status?: CallRecordingEnumStatusEnum;
    track?: string;
    uri?: string;
}
