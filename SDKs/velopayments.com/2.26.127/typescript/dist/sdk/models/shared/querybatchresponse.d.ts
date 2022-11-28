import { SpeakeasyBase } from "../../../internal/utils";
import { FailedSubmission } from "./failedsubmission";
export declare enum QueryBatchResponseStatusEnum {
    Submitted = "SUBMITTED",
    Accepted = "ACCEPTED"
}
export declare class QueryBatchResponse extends SpeakeasyBase {
    failureCount?: number;
    failures?: FailedSubmission[];
    pendingCount?: number;
    status?: QueryBatchResponseStatusEnum;
}
