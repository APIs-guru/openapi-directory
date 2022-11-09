import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskrouterV1WorkspaceWorkerWorkerChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=assigned_tasks" })
  assignedTasks?: number;

  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=available_capacity_percentage" })
  availableCapacityPercentage?: number;

  @Metadata({ data: "json, name=configured_capacity" })
  configuredCapacity?: number;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=task_channel_sid" })
  taskChannelSid?: string;

  @Metadata({ data: "json, name=task_channel_unique_name" })
  taskChannelUniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=worker_sid" })
  workerSid?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
