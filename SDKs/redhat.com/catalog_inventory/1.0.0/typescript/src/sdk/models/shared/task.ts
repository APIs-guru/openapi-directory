import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TaskStateEnum {
    Pending = "pending"
,    Queued = "queued"
,    Running = "running"
,    Timedout = "timedout"
,    Completed = "completed"
}

export enum TaskStatusEnum {
    Ok = "ok"
,    Warn = "warn"
,    Unchanged = "unchanged"
,    Error = "error"
}


export class Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @Metadata({ data: "json, name=child_task_id" })
  childTaskId?: string;

  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=controller_message_id" })
  controllerMessageId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=input" })
  input?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=output" })
  output?: Map<string, any>;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=state" })
  state?: TaskStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: TaskStatusEnum;

  @Metadata({ data: "json, name=target_source_ref" })
  targetSourceRef?: string;

  @Metadata({ data: "json, name=target_type" })
  targetType?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
