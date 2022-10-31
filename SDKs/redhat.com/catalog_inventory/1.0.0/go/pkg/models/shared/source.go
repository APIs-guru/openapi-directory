package shared

import (
"time")

type Source struct {
    ArchivedAt *time.Time `json:"archived_at,omitempty"`
    AvailabilityMessage *string `json:"availability_message,omitempty"`
    AvailabilityStatus *string `json:"availability_status,omitempty"`
    CloudConnectorID *string `json:"cloud_connector_id,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ID *string `json:"id,omitempty"`
    Info map[string]interface{} `json:"info,omitempty"`
    LastAvailableAt *time.Time `json:"last_available_at,omitempty"`
    LastCheckedAt *time.Time `json:"last_checked_at,omitempty"`
    LastRefreshMessage *string `json:"last_refresh_message,omitempty"`
    LastSuccessfulRefreshAt *time.Time `json:"last_successful_refresh_at,omitempty"`
    Name *string `json:"name,omitempty"`
    PreviousSha *string `json:"previous_sha,omitempty"`
    PreviousSize *int64 `json:"previous_size,omitempty"`
    RefreshFinishedAt *time.Time `json:"refresh_finished_at,omitempty"`
    RefreshStartedAt *time.Time `json:"refresh_started_at,omitempty"`
    RefreshState *string `json:"refresh_state,omitempty"`
    RefreshTaskID *string `json:"refresh_task_id,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}

