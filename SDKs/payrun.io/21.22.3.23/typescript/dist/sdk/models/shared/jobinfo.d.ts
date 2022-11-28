import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The job infos' errors
**/
export declare class JobInfoJobInfoErrors extends SpeakeasyBase {
    error?: string[];
}
export declare enum JobInfoJobInfoJobStatusEnum {
    New = "New",
    Pending = "Pending",
    InProgress = "InProgress",
    Success = "Success",
    Failed = "Failed",
    OnHold = "OnHold"
}
export declare class JobInfoJobInfo extends SpeakeasyBase {
    created?: Date;
    employerKey?: string;
    errors?: JobInfoJobInfoErrors;
    holdingDate?: Date;
    jobId?: string;
    jobStatus?: JobInfoJobInfoJobStatusEnum;
    jobType?: string;
    lastUpdated?: Date;
    progress?: number;
}
export declare class JobInfo extends SpeakeasyBase {
    jobInfo?: JobInfoJobInfo;
}
