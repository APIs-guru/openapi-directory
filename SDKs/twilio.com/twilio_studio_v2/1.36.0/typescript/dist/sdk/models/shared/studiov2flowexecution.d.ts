import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionEnumStatusEnum } from "./executionenumstatusenum";
export declare class StudioV2FlowExecution extends SpeakeasyBase {
    accountSid?: string;
    contactChannelAddress?: string;
    context?: any;
    dateCreated?: Date;
    dateUpdated?: Date;
    flowSid?: string;
    links?: Map<string, any>;
    sid?: string;
    status?: ExecutionEnumStatusEnum;
    url?: string;
}
