import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelBuildEnumStatusEnum } from "./modelbuildenumstatusenum";
export declare class PreviewUnderstandAssistantModelBuild extends SpeakeasyBase {
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
