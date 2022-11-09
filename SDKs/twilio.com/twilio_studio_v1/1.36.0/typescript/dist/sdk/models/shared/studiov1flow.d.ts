import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowEnumStatusEnum } from "./flowenumstatusenum";
export declare class StudioV1Flow extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    links?: Map<string, any>;
    sid?: string;
    status?: FlowEnumStatusEnum;
    url?: string;
    version?: number;
}
