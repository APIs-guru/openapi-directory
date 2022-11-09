import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=longest_task_waiting_age" })
  longestTaskWaitingAge?: number;

  @Metadata({ data: "json, name=longest_task_waiting_sid" })
  longestTaskWaitingSid?: string;

  @Metadata({ data: "json, name=tasks_by_priority" })
  tasksByPriority?: any;

  @Metadata({ data: "json, name=tasks_by_status" })
  tasksByStatus?: any;

  @Metadata({ data: "json, name=total_tasks" })
  totalTasks?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=workflow_sid" })
  workflowSid?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
