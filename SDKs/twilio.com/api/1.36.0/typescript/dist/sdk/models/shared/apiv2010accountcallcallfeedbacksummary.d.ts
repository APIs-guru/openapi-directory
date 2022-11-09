import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CallFeedbackSummaryEnumStatusEnum } from "./callfeedbacksummaryenumstatusenum";
export declare class ApiV2010AccountCallCallFeedbackSummary extends SpeakeasyBase {
    accountSid?: string;
    callCount?: number;
    callFeedbackCount?: number;
    dateCreated?: string;
    dateUpdated?: string;
    endDate?: Date;
    includeSubaccounts?: boolean;
    issues?: any[];
    qualityScoreAverage?: number;
    qualityScoreMedian?: number;
    qualityScoreStandardDeviation?: number;
    sid?: string;
    startDate?: Date;
    status?: CallFeedbackSummaryEnumStatusEnum;
}
