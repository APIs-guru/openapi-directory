import { SpeakeasyBase } from "../../../internal/utils";
import { FlowRevisionEnumStatusEnum } from "./flowrevisionenumstatusenum";
export declare class StudioV2FlowFlowRevision extends SpeakeasyBase {
    accountSid?: string;
    commitMessage?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    definition?: any;
    errors?: any[];
    friendlyName?: string;
    revision?: number;
    sid?: string;
    status?: FlowRevisionEnumStatusEnum;
    url?: string;
    valid?: boolean;
}
