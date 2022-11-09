import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskrouterV1WorkspaceWorkspaceCumulativeStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=avg_task_acceptance_time" })
  avgTaskAcceptanceTime?: number;

  @Metadata({ data: "json, name=end_time" })
  endTime?: Date;

  @Metadata({ data: "json, name=reservations_accepted" })
  reservationsAccepted?: number;

  @Metadata({ data: "json, name=reservations_canceled" })
  reservationsCanceled?: number;

  @Metadata({ data: "json, name=reservations_created" })
  reservationsCreated?: number;

  @Metadata({ data: "json, name=reservations_rejected" })
  reservationsRejected?: number;

  @Metadata({ data: "json, name=reservations_rescinded" })
  reservationsRescinded?: number;

  @Metadata({ data: "json, name=reservations_timed_out" })
  reservationsTimedOut?: number;

  @Metadata({ data: "json, name=split_by_wait_time" })
  splitByWaitTime?: any;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;

  @Metadata({ data: "json, name=tasks_canceled" })
  tasksCanceled?: number;

  @Metadata({ data: "json, name=tasks_completed" })
  tasksCompleted?: number;

  @Metadata({ data: "json, name=tasks_created" })
  tasksCreated?: number;

  @Metadata({ data: "json, name=tasks_deleted" })
  tasksDeleted?: number;

  @Metadata({ data: "json, name=tasks_moved" })
  tasksMoved?: number;

  @Metadata({ data: "json, name=tasks_timed_out_in_workflow" })
  tasksTimedOutInWorkflow?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=wait_duration_until_accepted" })
  waitDurationUntilAccepted?: any;

  @Metadata({ data: "json, name=wait_duration_until_canceled" })
  waitDurationUntilCanceled?: any;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
