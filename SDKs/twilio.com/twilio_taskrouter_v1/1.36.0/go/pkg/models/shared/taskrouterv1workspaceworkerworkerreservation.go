package shared

import (
"time")

type TaskrouterV1WorkspaceWorkerWorkerReservation struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    ReservationStatus *WorkerReservationEnumStatusEnum `json:"reservation_status,omitempty"`
    Sid *string `json:"sid,omitempty"`
    TaskSid *string `json:"task_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    WorkerName *string `json:"worker_name,omitempty"`
    WorkerSid *string `json:"worker_sid,omitempty"`
    WorkspaceSid *string `json:"workspace_sid,omitempty"`
    
}

