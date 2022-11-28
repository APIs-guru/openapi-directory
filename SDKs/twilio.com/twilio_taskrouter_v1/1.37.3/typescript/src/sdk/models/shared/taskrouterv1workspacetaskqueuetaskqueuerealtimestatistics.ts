import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_statistics" })
  activityStatistics?: any[];

  @SpeakeasyMetadata({ data: "json, name=longest_relative_task_age_in_queue" })
  longestRelativeTaskAgeInQueue?: number;

  @SpeakeasyMetadata({ data: "json, name=longest_relative_task_sid_in_queue" })
  longestRelativeTaskSidInQueue?: string;

  @SpeakeasyMetadata({ data: "json, name=longest_task_waiting_age" })
  longestTaskWaitingAge?: number;

  @SpeakeasyMetadata({ data: "json, name=longest_task_waiting_sid" })
  longestTaskWaitingSid?: string;

  @SpeakeasyMetadata({ data: "json, name=task_queue_sid" })
  taskQueueSid?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks_by_priority" })
  tasksByPriority?: any;

  @SpeakeasyMetadata({ data: "json, name=tasks_by_status" })
  tasksByStatus?: any;

  @SpeakeasyMetadata({ data: "json, name=total_available_workers" })
  totalAvailableWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=total_eligible_workers" })
  totalEligibleWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tasks" })
  totalTasks?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
