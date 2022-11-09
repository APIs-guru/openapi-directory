import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ModelStatusEnum {
    Queued = "QUEUED"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Killed = "KILLED"
,    FailedWithRetries = "FAILED_WITH_RETRIES"
}


export class Model extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=datasetId" })
  datasetId: number;

  @Metadata({ data: "json, name=datasetVersionId" })
  datasetVersionId: number;

  @Metadata({ data: "json, name=failureMsg" })
  failureMsg?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=modelId" })
  modelId: string;

  @Metadata({ data: "json, name=modelType" })
  modelType?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=status" })
  status: ModelStatusEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
