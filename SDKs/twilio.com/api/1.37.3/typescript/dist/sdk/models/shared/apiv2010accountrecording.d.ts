import { SpeakeasyBase } from "../../../internal/utils";
import { RecordingEnumSourceEnum } from "./recordingenumsourceenum";
import { RecordingEnumStatusEnum } from "./recordingenumstatusenum";
export declare class ApiV2010AccountRecording extends SpeakeasyBase {
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
    mediaUrl?: string;
    price?: string;
    priceUnit?: string;
    sid?: string;
    source?: RecordingEnumSourceEnum;
    startTime?: string;
    status?: RecordingEnumStatusEnum;
    subresourceUris?: Map<string, any>;
    uri?: string;
}
