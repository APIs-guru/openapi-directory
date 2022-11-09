import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=activity_statistics" })
  activityStatistics?: any[];

  @Metadata({ data: "json, name=longest_relative_task_age_in_queue" })
  longestRelativeTaskAgeInQueue?: number;

  @Metadata({ data: "json, name=longest_relative_task_sid_in_queue" })
  longestRelativeTaskSidInQueue?: string;

  @Metadata({ data: "json, name=longest_task_waiting_age" })
  longestTaskWaitingAge?: number;

  @Metadata({ data: "json, name=longest_task_waiting_sid" })
  longestTaskWaitingSid?: string;

  @Metadata({ data: "json, name=task_queue_sid" })
  taskQueueSid?: string;

  @Metadata({ data: "json, name=tasks_by_priority" })
  tasksByPriority?: any;

  @Metadata({ data: "json, name=tasks_by_status" })
  tasksByStatus?: any;

  @Metadata({ data: "json, name=total_available_workers" })
  totalAvailableWorkers?: number;

  @Metadata({ data: "json, name=total_eligible_workers" })
  totalEligibleWorkers?: number;

  @Metadata({ data: "json, name=total_tasks" })
  totalTasks?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
