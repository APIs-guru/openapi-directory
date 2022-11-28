import { SpeakeasyBase } from "../../../internal/utils";
export declare class AutopilotV1Assistant extends SpeakeasyBase {
    accountSid?: string;
    callbackEvents?: string;
    callbackUrl?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    developmentStage?: string;
    friendlyName?: string;
    latestModelBuildSid?: string;
    links?: Map<string, any>;
    logQueries?: boolean;
    needsModelBuild?: boolean;
    sid?: string;
    uniqueName?: string;
    url?: string;
}
