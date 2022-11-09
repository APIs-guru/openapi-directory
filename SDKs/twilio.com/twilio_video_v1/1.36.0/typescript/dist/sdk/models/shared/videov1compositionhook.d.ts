import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositionHookEnumFormatEnum } from "./compositionhookenumformatenum";
export declare enum VideoV1CompositionHookStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class VideoV1CompositionHook extends SpeakeasyBase {
    accountSid?: string;
    audioSources?: string[];
    audioSourcesExcluded?: string[];
    dateCreated?: Date;
    dateUpdated?: Date;
    enabled?: boolean;
    format?: CompositionHookEnumFormatEnum;
    friendlyName?: string;
    resolution?: string;
    sid?: string;
    statusCallback?: string;
    statusCallbackMethod?: VideoV1CompositionHookStatusCallbackMethodEnum;
    trim?: boolean;
    url?: string;
    videoLayout?: any;
}
