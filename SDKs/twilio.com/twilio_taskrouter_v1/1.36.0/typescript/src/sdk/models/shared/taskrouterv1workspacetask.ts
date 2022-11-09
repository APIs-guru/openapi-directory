import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskEnumStatusEnum } from "./taskenumstatusenum";


export class TaskrouterV1WorkspaceTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=addons" })
  addons?: string;

  @Metadata({ data: "json, name=age" })
  age?: number;

  @Metadata({ data: "json, name=assignment_status" })
  assignmentStatus?: TaskEnumStatusEnum;

  @Metadata({ data: "json, name=attributes" })
  attributes?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=task_channel_sid" })
  taskChannelSid?: string;

  @Metadata({ data: "json, name=task_channel_unique_name" })
  taskChannelUniqueName?: string;

  @Metadata({ data: "json, name=task_queue_entered_date" })
  taskQueueEnteredDate?: Date;

  @Metadata({ data: "json, name=task_queue_friendly_name" })
  taskQueueFriendlyName?: string;

  @Metadata({ data: "json, name=task_queue_sid" })
  taskQueueSid?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=workflow_friendly_name" })
  workflowFriendlyName?: string;

  @Metadata({ data: "json, name=workflow_sid" })
  workflowSid?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
