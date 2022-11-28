import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeletionResponseStatusOfTheDeletionEnum {
    Queued = "QUEUED",
    Running = "RUNNING",
    SucceededWaitingForCacheRemoval = "SUCCEEDED_WAITING_FOR_CACHE_REMOVAL",
    Succeeded = "SUCCEEDED",
    Killed = "KILLED",
    Failed = "FAILED",
    Retry = "RETRY"
}

export enum DeletionResponseObjectThatSBeingDeletedEnum {
    Dataset = "DATASET",
    Model = "MODEL"
}


export class DeletionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedObjectId" })
  deletedObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DeletionResponseStatusOfTheDeletionEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DeletionResponseObjectThatSBeingDeletedEnum;
}
