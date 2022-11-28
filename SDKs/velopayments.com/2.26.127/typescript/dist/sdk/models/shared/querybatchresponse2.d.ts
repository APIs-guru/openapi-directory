import { SpeakeasyBase } from "../../../internal/utils";
import { FailedSubmission2 } from "./failedsubmission2";
export declare enum QueryBatchResponse2StatusEnum {
    Submitted = "SUBMITTED",
    Accepted = "ACCEPTED"
}
export declare class QueryBatchResponse2 extends SpeakeasyBase {
    failureCount?: number;
    failures?: FailedSubmission2[];
    pendingCount?: number;
    status?: QueryBatchResponse2StatusEnum;
}
