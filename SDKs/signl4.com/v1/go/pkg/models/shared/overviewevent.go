package shared

import (
	"time"
)

type OverviewEvent struct {
	AcknowledgedAlerts []string   `json:"acknowledgedAlerts,omitempty"`
	AlertID            *string    `json:"alertId,omitempty"`
	CategoryID         *string    `json:"categoryId,omitempty"`
	ClosedAlerts       []string   `json:"closedAlerts,omitempty"`
	CreationTime       *time.Time `json:"creationTime,omitempty"`
	EventSourceType    *int32     `json:"eventSourceType,omitempty"`
	EventStatus        *int32     `json:"eventStatus,omitempty"`
	ID                 *string    `json:"id,omitempty"`
	LastModified       *time.Time `json:"lastModified,omitempty"`
	Severity           *int32     `json:"severity,omitempty"`
	TeamID             *string    `json:"teamId,omitempty"`
	Text               *string    `json:"text,omitempty"`
	Title              *string    `json:"title,omitempty"`
}
