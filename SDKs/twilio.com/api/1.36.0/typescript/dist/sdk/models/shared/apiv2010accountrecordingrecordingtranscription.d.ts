import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordingTranscriptionEnumStatusEnum } from "./recordingtranscriptionenumstatusenum";
export declare class ApiV2010AccountRecordingRecordingTranscription extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    dateCreated?: string;
    dateUpdated?: string;
    duration?: string;
    price?: number;
    priceUnit?: string;
    recordingSid?: string;
    sid?: string;
    status?: RecordingTranscriptionEnumStatusEnum;
    transcriptionText?: string;
    type?: string;
    uri?: string;
}
