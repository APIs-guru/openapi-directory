import { SpeakeasyBase } from "../../../internal/utils";
import { FlowEnumStatusEnum } from "./flowenumstatusenum";
export declare class StudioV2Flow extends SpeakeasyBase {
    accountSid?: string;
    commitMessage?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    definition?: any;
    errors?: any[];
    friendlyName?: string;
    links?: Map<string, any>;
    revision?: number;
    sid?: string;
    status?: FlowEnumStatusEnum;
    url?: string;
    valid?: boolean;
    warnings?: any[];
    webhookUrl?: string;
}
