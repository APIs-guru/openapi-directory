import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=longest_task_waiting_age" })
  longestTaskWaitingAge?: number;

  @SpeakeasyMetadata({ data: "json, name=longest_task_waiting_sid" })
  longestTaskWaitingSid?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks_by_priority" })
  tasksByPriority?: any;

  @SpeakeasyMetadata({ data: "json, name=tasks_by_status" })
  tasksByStatus?: any;

  @SpeakeasyMetadata({ data: "json, name=total_tasks" })
  totalTasks?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=workflow_sid" })
  workflowSid?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
