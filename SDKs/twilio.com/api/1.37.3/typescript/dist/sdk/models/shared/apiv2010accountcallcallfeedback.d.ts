import { SpeakeasyBase } from "../../../internal/utils";
import { CallFeedbackEnumIssuesEnum } from "./callfeedbackenumissuesenum";
export declare class ApiV2010AccountCallCallFeedback extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: string;
    dateUpdated?: string;
    issues?: CallFeedbackEnumIssuesEnum[];
    qualityScore?: number;
    sid?: string;
}
