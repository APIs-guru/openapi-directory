package shared

import (
	"time"
)

type Source struct {
	ArchivedAt              *time.Time             `json:"archived_at"`
	AvailabilityMessage     *string                `json:"availability_message"`
	AvailabilityStatus      *string                `json:"availability_status"`
	CloudConnectorID        *string                `json:"cloud_connector_id"`
	CreatedAt               *time.Time             `json:"created_at"`
	Enabled                 *bool                  `json:"enabled"`
	ID                      *string                `json:"id"`
	Info                    map[string]interface{} `json:"info"`
	LastAvailableAt         *time.Time             `json:"last_available_at"`
	LastCheckedAt           *time.Time             `json:"last_checked_at"`
	LastRefreshMessage      *string                `json:"last_refresh_message"`
	LastSuccessfulRefreshAt *time.Time             `json:"last_successful_refresh_at"`
	Name                    *string                `json:"name"`
	PreviousSha             *string                `json:"previous_sha"`
	PreviousSize            *int64                 `json:"previous_size"`
	RefreshFinishedAt       *time.Time             `json:"refresh_finished_at"`
	RefreshStartedAt        *time.Time             `json:"refresh_started_at"`
	RefreshState            *string                `json:"refresh_state"`
	RefreshTaskID           *string                `json:"refresh_task_id"`
	UID                     *string                `json:"uid"`
	UpdatedAt               *time.Time             `json:"updated_at"`
}
