package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics struct {
	AccountSid            *string       `json:"account_sid"`
	ActivityDurations     []interface{} `json:"activity_durations"`
	EndTime               *time.Time    `json:"end_time"`
	ReservationsAccepted  *int64        `json:"reservations_accepted"`
	ReservationsCanceled  *int64        `json:"reservations_canceled"`
	ReservationsCreated   *int64        `json:"reservations_created"`
	ReservationsRejected  *int64        `json:"reservations_rejected"`
	ReservationsRescinded *int64        `json:"reservations_rescinded"`
	ReservationsTimedOut  *int64        `json:"reservations_timed_out"`
	StartTime             *time.Time    `json:"start_time"`
	URL                   *string       `json:"url"`
	WorkspaceSid          *string       `json:"workspace_sid"`
}
