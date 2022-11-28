import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ModelStatusEnum {
    Queued = "QUEUED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Killed = "KILLED",
    FailedWithRetries = "FAILED_WITH_RETRIES"
}
export declare class Model extends SpeakeasyBase {
    algorithm?: string;
    createdAt?: Date;
    datasetId: number;
    datasetVersionId: number;
    failureMsg?: string;
    language?: string;
    modelId: string;
    modelType?: string;
    name: string;
    object?: string;
    progress: number;
    status: ModelStatusEnum;
    updatedAt?: Date;
}
