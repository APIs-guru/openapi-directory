import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskEnumStatusEnum } from "./taskenumstatusenum";



export class TaskrouterV1WorkspaceTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=addons" })
  addons?: string;

  @SpeakeasyMetadata({ data: "json, name=age" })
  age?: number;

  @SpeakeasyMetadata({ data: "json, name=assignment_status" })
  assignmentStatus?: TaskEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=task_channel_sid" })
  taskChannelSid?: string;

  @SpeakeasyMetadata({ data: "json, name=task_channel_unique_name" })
  taskChannelUniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=task_queue_entered_date" })
  taskQueueEnteredDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=task_queue_friendly_name" })
  taskQueueFriendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=task_queue_sid" })
  taskQueueSid?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=workflow_friendly_name" })
  workflowFriendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=workflow_sid" })
  workflowSid?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
