package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorkerWorkerReservation struct {
	AccountSid        *string                          `json:"account_sid"`
	DateCreated       *time.Time                       `json:"date_created"`
	DateUpdated       *time.Time                       `json:"date_updated"`
	Links             map[string]interface{}           `json:"links"`
	ReservationStatus *WorkerReservationEnumStatusEnum `json:"reservation_status"`
	Sid               *string                          `json:"sid"`
	TaskSid           *string                          `json:"task_sid"`
	URL               *string                          `json:"url"`
	WorkerName        *string                          `json:"worker_name"`
	WorkerSid         *string                          `json:"worker_sid"`
	WorkspaceSid      *string                          `json:"workspace_sid"`
}
