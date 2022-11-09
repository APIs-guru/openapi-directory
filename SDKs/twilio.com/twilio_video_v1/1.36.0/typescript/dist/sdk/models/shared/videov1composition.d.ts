import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositionEnumFormatEnum } from "./compositionenumformatenum";
import { CompositionEnumStatusEnum } from "./compositionenumstatusenum";
export declare enum VideoV1CompositionStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class VideoV1Composition extends SpeakeasyBase {
    accountSid?: string;
    audioSources?: string[];
    audioSourcesExcluded?: string[];
    bitrate?: number;
    dateCompleted?: Date;
    dateCreated?: Date;
    dateDeleted?: Date;
    duration?: number;
    format?: CompositionEnumFormatEnum;
    links?: Map<string, any>;
    mediaExternalLocation?: string;
    resolution?: string;
    roomSid?: string;
    sid?: string;
    size?: number;
    status?: CompositionEnumStatusEnum;
    statusCallback?: string;
    statusCallbackMethod?: VideoV1CompositionStatusCallbackMethodEnum;
    trim?: boolean;
    url?: string;
    videoLayout?: any;
}
