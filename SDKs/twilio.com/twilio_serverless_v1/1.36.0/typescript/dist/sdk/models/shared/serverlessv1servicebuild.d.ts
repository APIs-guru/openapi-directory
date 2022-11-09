import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildEnumRuntimeEnum } from "./buildenumruntimeenum";
import { BuildEnumStatusEnum } from "./buildenumstatusenum";
export declare class ServerlessV1ServiceBuild extends SpeakeasyBase {
    accountSid?: string;
    assetVersions?: any[];
    dateCreated?: Date;
    dateUpdated?: Date;
    dependencies?: any[];
    functionVersions?: any[];
    links?: Map<string, any>;
    runtime?: BuildEnumRuntimeEnum;
    serviceSid?: string;
    sid?: string;
    status?: BuildEnumStatusEnum;
    url?: string;
}
