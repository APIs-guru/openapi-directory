import { SpeakeasyBase } from "../../../internal/utils";
import { RecordingEnumCodecEnum } from "./recordingenumcodecenum";
import { RecordingEnumFormatEnum } from "./recordingenumformatenum";
import { RecordingEnumStatusEnum } from "./recordingenumstatusenum";
import { RecordingEnumTypeEnum } from "./recordingenumtypeenum";
export declare enum VideoV1RecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class VideoV1Recording extends SpeakeasyBase {
    accountSid?: string;
    codec?: RecordingEnumCodecEnum;
    containerFormat?: RecordingEnumFormatEnum;
    dateCreated?: Date;
    duration?: number;
    groupingSids?: any;
    links?: Map<string, any>;
    mediaExternalLocation?: string;
    offset?: number;
    sid?: string;
    size?: number;
    sourceSid?: string;
    status?: RecordingEnumStatusEnum;
    statusCallback?: string;
    statusCallbackMethod?: VideoV1RecordingStatusCallbackMethodEnum;
    trackName?: string;
    type?: RecordingEnumTypeEnum;
    url?: string;
}
