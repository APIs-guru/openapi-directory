import { SpeakeasyBase } from "../../../internal/utils";
import { MediaProcessorEnumStatusEnum } from "./mediaprocessorenumstatusenum";
export declare enum MediaV1MediaProcessorStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class MediaV1MediaProcessor extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    endedReason?: string;
    extension?: string;
    extensionContext?: string;
    maxDuration?: number;
    sid?: string;
    status?: MediaProcessorEnumStatusEnum;
    statusCallback?: string;
    statusCallbackMethod?: MediaV1MediaProcessorStatusCallbackMethodEnum;
    url?: string;
}
