import { SpeakeasyBase } from "../../../internal/utils";
import { LogEnumLevelEnum } from "./logenumlevelenum";
export declare class ServerlessV1ServiceEnvironmentLog extends SpeakeasyBase {
    accountSid?: string;
    buildSid?: string;
    dateCreated?: Date;
    deploymentSid?: string;
    environmentSid?: string;
    functionSid?: string;
    level?: LogEnumLevelEnum;
    message?: string;
    requestSid?: string;
    serviceSid?: string;
    sid?: string;
    url?: string;
}
