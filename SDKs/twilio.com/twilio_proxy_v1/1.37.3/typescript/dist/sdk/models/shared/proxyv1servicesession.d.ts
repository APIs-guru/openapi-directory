import { SpeakeasyBase } from "../../../internal/utils";
import { SessionEnumModeEnum } from "./sessionenummodeenum";
import { SessionEnumStatusEnum } from "./sessionenumstatusenum";
export declare class ProxyV1ServiceSession extends SpeakeasyBase {
    accountSid?: string;
    closedReason?: string;
    dateCreated?: Date;
    dateEnded?: Date;
    dateExpiry?: Date;
    dateLastInteraction?: Date;
    dateStarted?: Date;
    dateUpdated?: Date;
    links?: Map<string, any>;
    mode?: SessionEnumModeEnum;
    serviceSid?: string;
    sid?: string;
    status?: SessionEnumStatusEnum;
    ttl?: number;
    uniqueName?: string;
    url?: string;
}
