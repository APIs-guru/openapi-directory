import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PlayerStreamerEnumEndedReasonEnum } from "./playerstreamerenumendedreasonenum";
import { PlayerStreamerEnumStatusEnum } from "./playerstreamerenumstatusenum";
export declare enum MediaV1PlayerStreamerStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class MediaV1PlayerStreamer extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    endedReason?: PlayerStreamerEnumEndedReasonEnum;
    links?: Map<string, any>;
    maxDuration?: number;
    sid?: string;
    status?: PlayerStreamerEnumStatusEnum;
    statusCallback?: string;
    statusCallbackMethod?: MediaV1PlayerStreamerStatusCallbackMethodEnum;
    url?: string;
    video?: boolean;
}
