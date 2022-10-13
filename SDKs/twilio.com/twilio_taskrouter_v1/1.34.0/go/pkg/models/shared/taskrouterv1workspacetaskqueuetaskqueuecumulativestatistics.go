package shared

import (
	"time"
)

type TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics struct {
	AccountSid                       *string      `json:"account_sid"`
	AvgTaskAcceptanceTime            *int64       `json:"avg_task_acceptance_time"`
	EndTime                          *time.Time   `json:"end_time"`
	ReservationsAccepted             *int64       `json:"reservations_accepted"`
	ReservationsCanceled             *int64       `json:"reservations_canceled"`
	ReservationsCreated              *int64       `json:"reservations_created"`
	ReservationsRejected             *int64       `json:"reservations_rejected"`
	ReservationsRescinded            *int64       `json:"reservations_rescinded"`
	ReservationsTimedOut             *int64       `json:"reservations_timed_out"`
	SplitByWaitTime                  *interface{} `json:"split_by_wait_time"`
	StartTime                        *time.Time   `json:"start_time"`
	TaskQueueSid                     *string      `json:"task_queue_sid"`
	TasksCanceled                    *int64       `json:"tasks_canceled"`
	TasksCompleted                   *int64       `json:"tasks_completed"`
	TasksDeleted                     *int64       `json:"tasks_deleted"`
	TasksEntered                     *int64       `json:"tasks_entered"`
	TasksMoved                       *int64       `json:"tasks_moved"`
	URL                              *string      `json:"url"`
	WaitDurationInQueueUntilAccepted *interface{} `json:"wait_duration_in_queue_until_accepted"`
	WaitDurationUntilAccepted        *interface{} `json:"wait_duration_until_accepted"`
	WaitDurationUntilCanceled        *interface{} `json:"wait_duration_until_canceled"`
	WorkspaceSid                     *string      `json:"workspace_sid"`
}
