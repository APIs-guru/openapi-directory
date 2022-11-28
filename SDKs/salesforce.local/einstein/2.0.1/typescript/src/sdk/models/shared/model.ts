import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ModelStatusEnum {
    Queued = "QUEUED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Killed = "KILLED",
    FailedWithRetries = "FAILED_WITH_RETRIES"
}


export class Model extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId: number;

  @SpeakeasyMetadata({ data: "json, name=datasetVersionId" })
  datasetVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=failureMsg" })
  failureMsg?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=modelId" })
  modelId: string;

  @SpeakeasyMetadata({ data: "json, name=modelType" })
  modelType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
