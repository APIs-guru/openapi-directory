import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobInfoJobInfoErrors
/** 
 * The job infos' errors
**/
export class JobInfoJobInfoErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: string[];
}

export enum JobInfoJobInfoJobStatusEnum {
    New = "New"
,    Pending = "Pending"
,    InProgress = "InProgress"
,    Success = "Success"
,    Failed = "Failed"
,    OnHold = "OnHold"
}


export class JobInfoJobInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=EmployerKey" })
  employerKey?: string;

  @Metadata({ data: "json, name=Errors" })
  errors?: JobInfoJobInfoErrors;

  @Metadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobInfoJobInfoJobStatusEnum;

  @Metadata({ data: "json, name=JobType" })
  jobType?: string;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=Progress" })
  progress?: number;
}


export class JobInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobInfo" })
  jobInfo?: JobInfoJobInfo;
}
