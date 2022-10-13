package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorkspaceCumulativeStatistics struct {
	AccountSid                *string      `json:"account_sid"`
	AvgTaskAcceptanceTime     *int64       `json:"avg_task_acceptance_time"`
	EndTime                   *time.Time   `json:"end_time"`
	ReservationsAccepted      *int64       `json:"reservations_accepted"`
	ReservationsCanceled      *int64       `json:"reservations_canceled"`
	ReservationsCreated       *int64       `json:"reservations_created"`
	ReservationsRejected      *int64       `json:"reservations_rejected"`
	ReservationsRescinded     *int64       `json:"reservations_rescinded"`
	ReservationsTimedOut      *int64       `json:"reservations_timed_out"`
	SplitByWaitTime           *interface{} `json:"split_by_wait_time"`
	StartTime                 *time.Time   `json:"start_time"`
	TasksCanceled             *int64       `json:"tasks_canceled"`
	TasksCompleted            *int64       `json:"tasks_completed"`
	TasksCreated              *int64       `json:"tasks_created"`
	TasksDeleted              *int64       `json:"tasks_deleted"`
	TasksMoved                *int64       `json:"tasks_moved"`
	TasksTimedOutInWorkflow   *int64       `json:"tasks_timed_out_in_workflow"`
	URL                       *string      `json:"url"`
	WaitDurationUntilAccepted *interface{} `json:"wait_duration_until_accepted"`
	WaitDurationUntilCanceled *interface{} `json:"wait_duration_until_canceled"`
	WorkspaceSid              *string      `json:"workspace_sid"`
}
