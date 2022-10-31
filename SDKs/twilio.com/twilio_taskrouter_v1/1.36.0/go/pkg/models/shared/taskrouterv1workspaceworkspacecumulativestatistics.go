package shared

import (
"time")

type TaskrouterV1WorkspaceWorkspaceCumulativeStatistics struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AvgTaskAcceptanceTime *int64 `json:"avg_task_acceptance_time,omitempty"`
    EndTime *time.Time `json:"end_time,omitempty"`
    ReservationsAccepted *int64 `json:"reservations_accepted,omitempty"`
    ReservationsCanceled *int64 `json:"reservations_canceled,omitempty"`
    ReservationsCreated *int64 `json:"reservations_created,omitempty"`
    ReservationsRejected *int64 `json:"reservations_rejected,omitempty"`
    ReservationsRescinded *int64 `json:"reservations_rescinded,omitempty"`
    ReservationsTimedOut *int64 `json:"reservations_timed_out,omitempty"`
    SplitByWaitTime *interface{} `json:"split_by_wait_time,omitempty"`
    StartTime *time.Time `json:"start_time,omitempty"`
    TasksCanceled *int64 `json:"tasks_canceled,omitempty"`
    TasksCompleted *int64 `json:"tasks_completed,omitempty"`
    TasksCreated *int64 `json:"tasks_created,omitempty"`
    TasksDeleted *int64 `json:"tasks_deleted,omitempty"`
    TasksMoved *int64 `json:"tasks_moved,omitempty"`
    TasksTimedOutInWorkflow *int64 `json:"tasks_timed_out_in_workflow,omitempty"`
    URL *string `json:"url,omitempty"`
    WaitDurationUntilAccepted *interface{} `json:"wait_duration_until_accepted,omitempty"`
    WaitDurationUntilCanceled *interface{} `json:"wait_duration_until_canceled,omitempty"`
    WorkspaceSid *string `json:"workspace_sid,omitempty"`
    
}

