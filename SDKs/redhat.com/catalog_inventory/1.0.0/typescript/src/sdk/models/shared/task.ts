import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaskStateEnum {
    Pending = "pending",
    Queued = "queued",
    Running = "running",
    Timedout = "timedout",
    Completed = "completed"
}

export enum TaskStatusEnum {
    Ok = "ok",
    Warn = "warn",
    Unchanged = "unchanged",
    Error = "error"
}


export class TaskInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TaskStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target_source_ref" })
  targetSourceRef?: string;

  @SpeakeasyMetadata({ data: "json, name=target_type" })
  targetType?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=child_task_id" })
  childTaskId?: string;

  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=controller_message_id" })
  controllerMessageId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TaskStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target_source_ref" })
  targetSourceRef?: string;

  @SpeakeasyMetadata({ data: "json, name=target_type" })
  targetType?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
