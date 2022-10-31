package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics struct {
	AccountSid            *string       `json:"account_sid,omitempty"`
	ActivityDurations     []interface{} `json:"activity_durations,omitempty"`
	EndTime               *time.Time    `json:"end_time,omitempty"`
	ReservationsAccepted  *int64        `json:"reservations_accepted,omitempty"`
	ReservationsCanceled  *int64        `json:"reservations_canceled,omitempty"`
	ReservationsCreated   *int64        `json:"reservations_created,omitempty"`
	ReservationsRejected  *int64        `json:"reservations_rejected,omitempty"`
	ReservationsRescinded *int64        `json:"reservations_rescinded,omitempty"`
	ReservationsTimedOut  *int64        `json:"reservations_timed_out,omitempty"`
	StartTime             *time.Time    `json:"start_time,omitempty"`
	URL                   *string       `json:"url,omitempty"`
	WorkspaceSid          *string       `json:"workspace_sid,omitempty"`
}
