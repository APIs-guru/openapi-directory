import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobInfoJobInfoErrors
/** 
 * The job infos' errors
**/
export class JobInfoJobInfoErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string[];
}

export enum JobInfoJobInfoJobStatusEnum {
    New = "New",
    Pending = "Pending",
    InProgress = "InProgress",
    Success = "Success",
    Failed = "Failed",
    OnHold = "OnHold"
}


export class JobInfoJobInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=EmployerKey" })
  employerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Errors" })
  errors?: JobInfoJobInfoErrors;

  @SpeakeasyMetadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobInfoJobInfoJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=JobType" })
  jobType?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=Progress" })
  progress?: number;
}


export class JobInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobInfo" })
  jobInfo?: JobInfoJobInfo;
}
