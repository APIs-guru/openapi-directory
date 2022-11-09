import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeletionResponseStatusOfTheDeletionEnum {
    Queued = "QUEUED"
,    Running = "RUNNING"
,    SucceededWaitingForCacheRemoval = "SUCCEEDED_WAITING_FOR_CACHE_REMOVAL"
,    Succeeded = "SUCCEEDED"
,    Killed = "KILLED"
,    Failed = "FAILED"
,    Retry = "RETRY"
}

export enum DeletionResponseObjectThatSBeingDeletedEnum {
    Dataset = "DATASET"
,    Model = "MODEL"
}


export class DeletionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedObjectId" })
  deletedObjectId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;

  @Metadata({ data: "json, name=progress" })
  progress?: number;

  @Metadata({ data: "json, name=status" })
  status?: DeletionResponseStatusOfTheDeletionEnum;

  @Metadata({ data: "json, name=type" })
  type?: DeletionResponseObjectThatSBeingDeletedEnum;
}
