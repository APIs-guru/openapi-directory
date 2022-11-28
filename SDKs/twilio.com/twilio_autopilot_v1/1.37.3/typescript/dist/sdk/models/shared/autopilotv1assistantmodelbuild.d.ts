import { SpeakeasyBase } from "../../../internal/utils";
import { ModelBuildEnumStatusEnum } from "./modelbuildenumstatusenum";
export declare class AutopilotV1AssistantModelBuild extends SpeakeasyBase {
    accountSid?: string;
    assistantSid?: string;
    buildDuration?: number;
    dateCreated?: Date;
    dateUpdated?: Date;
    errorCode?: number;
    sid?: string;
    status?: ModelBuildEnumStatusEnum;
    uniqueName?: string;
    url?: string;
}
