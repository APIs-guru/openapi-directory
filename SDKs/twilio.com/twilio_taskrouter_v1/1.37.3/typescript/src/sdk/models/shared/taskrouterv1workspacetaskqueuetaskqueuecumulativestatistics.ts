import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=avg_task_acceptance_time" })
  avgTaskAcceptanceTime?: number;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=reservations_accepted" })
  reservationsAccepted?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_canceled" })
  reservationsCanceled?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_created" })
  reservationsCreated?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_rejected" })
  reservationsRejected?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_rescinded" })
  reservationsRescinded?: number;

  @SpeakeasyMetadata({ data: "json, name=reservations_timed_out" })
  reservationsTimedOut?: number;

  @SpeakeasyMetadata({ data: "json, name=split_by_wait_time" })
  splitByWaitTime?: any;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=task_queue_sid" })
  taskQueueSid?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks_canceled" })
  tasksCanceled?: number;

  @SpeakeasyMetadata({ data: "json, name=tasks_completed" })
  tasksCompleted?: number;

  @SpeakeasyMetadata({ data: "json, name=tasks_deleted" })
  tasksDeleted?: number;

  @SpeakeasyMetadata({ data: "json, name=tasks_entered" })
  tasksEntered?: number;

  @SpeakeasyMetadata({ data: "json, name=tasks_moved" })
  tasksMoved?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=wait_duration_in_queue_until_accepted" })
  waitDurationInQueueUntilAccepted?: any;

  @SpeakeasyMetadata({ data: "json, name=wait_duration_until_accepted" })
  waitDurationUntilAccepted?: any;

  @SpeakeasyMetadata({ data: "json, name=wait_duration_until_canceled" })
  waitDurationUntilCanceled?: any;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
