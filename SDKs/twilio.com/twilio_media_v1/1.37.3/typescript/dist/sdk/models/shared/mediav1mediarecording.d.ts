import { SpeakeasyBase } from "../../../internal/utils";
import { MediaRecordingEnumFormatEnum } from "./mediarecordingenumformatenum";
import { MediaRecordingEnumStatusEnum } from "./mediarecordingenumstatusenum";
export declare enum MediaV1MediaRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class MediaV1MediaRecording extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    duration?: number;
    format?: MediaRecordingEnumFormatEnum;
    links?: Map<string, any>;
    mediaSize?: number;
    processorSid?: string;
    resolution?: string;
    sid?: string;
    sourceSid?: string;
    status?: MediaRecordingEnumStatusEnum;
    statusCallback?: string;
    statusCallbackMethod?: MediaV1MediaRecordingStatusCallbackMethodEnum;
    url?: string;
}
