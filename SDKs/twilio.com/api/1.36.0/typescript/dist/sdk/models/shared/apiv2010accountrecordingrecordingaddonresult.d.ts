import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordingAddOnResultEnumStatusEnum } from "./recordingaddonresultenumstatusenum";
export declare class ApiV2010AccountRecordingRecordingAddOnResult extends SpeakeasyBase {
    accountSid?: string;
    addOnConfigurationSid?: string;
    addOnSid?: string;
    dateCompleted?: string;
    dateCreated?: string;
    dateUpdated?: string;
    referenceSid?: string;
    sid?: string;
    status?: RecordingAddOnResultEnumStatusEnum;
    subresourceUris?: Map<string, any>;
}
