import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeletionResponseStatusOfTheDeletionEnum {
    Queued = "QUEUED",
    Running = "RUNNING",
    SucceededWaitingForCacheRemoval = "SUCCEEDED_WAITING_FOR_CACHE_REMOVAL",
    Succeeded = "SUCCEEDED",
    Killed = "KILLED",
    Failed = "FAILED",
    Retry = "RETRY"
}
export declare enum DeletionResponseObjectThatSBeingDeletedEnum {
    Dataset = "DATASET",
    Model = "MODEL"
}
export declare class DeletionResponse extends SpeakeasyBase {
    deletedObjectId?: string;
    id?: string;
    message?: string;
    object?: string;
    organizationId?: string;
    progress?: number;
    status?: DeletionResponseStatusOfTheDeletionEnum;
    type?: DeletionResponseObjectThatSBeingDeletedEnum;
}
