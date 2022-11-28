import { SpeakeasyBase } from "../../../internal/utils";
import { TranscriptionEnumStatusEnum } from "./transcriptionenumstatusenum";
export declare class ApiV2010AccountTranscription extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    dateCreated?: string;
    dateUpdated?: string;
    duration?: string;
    price?: number;
    priceUnit?: string;
    recordingSid?: string;
    sid?: string;
    status?: TranscriptionEnumStatusEnum;
    transcriptionText?: string;
    type?: string;
    uri?: string;
}
