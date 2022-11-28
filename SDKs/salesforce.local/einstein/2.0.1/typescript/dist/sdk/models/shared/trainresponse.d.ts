import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TrainResponseStatusEnum {
    Queued = "QUEUED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Killed = "KILLED",
    FailedWithRetries = "FAILED_WITH_RETRIES"
}
export declare class TrainResponse extends SpeakeasyBase {
    algorithm?: string;
    createdAt?: Date;
    datasetId: number;
    datasetVersionId: number;
    epochs?: number;
    failureMsg?: string;
    language: string;
    learningRate?: number;
    modelId: string;
    modelType?: string;
    name: string;
    object?: string;
    progress: number;
    queuePosition?: number;
    status: TrainResponseStatusEnum;
    trainParams?: string;
    trainStats?: string;
    updatedAt?: Date;
}
