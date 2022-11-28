import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEnumStatusEnum } from "./executionenumstatusenum";
export declare class StudioV1FlowExecution extends SpeakeasyBase {
    accountSid?: string;
    contactChannelAddress?: string;
    contactSid?: string;
    context?: any;
    dateCreated?: Date;
    dateUpdated?: Date;
    flowSid?: string;
    links?: Map<string, any>;
    sid?: string;
    status?: ExecutionEnumStatusEnum;
    url?: string;
}
