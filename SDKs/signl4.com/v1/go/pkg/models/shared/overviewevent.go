package shared

import (
	"time"
)

type OverviewEvent struct {
	AcknowledgedAlerts []string   `json:"acknowledgedAlerts"`
	AlertID            *string    `json:"alertId"`
	CategoryID         *string    `json:"categoryId"`
	ClosedAlerts       []string   `json:"closedAlerts"`
	CreationTime       *time.Time `json:"creationTime"`
	EventSourceType    *int32     `json:"eventSourceType"`
	EventStatus        *int32     `json:"eventStatus"`
	ID                 *string    `json:"id"`
	LastModified       *time.Time `json:"lastModified"`
	Severity           *int32     `json:"severity"`
	TeamID             *string    `json:"teamId"`
	Text               *string    `json:"text"`
	Title              *string    `json:"title"`
}
