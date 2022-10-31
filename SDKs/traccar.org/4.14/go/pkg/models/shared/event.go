package shared

import (
	"time"
)

type Event struct {
	Attributes    map[string]interface{} `json:"attributes,omitempty"`
	DeviceID      *int64                 `json:"deviceId,omitempty"`
	EventTime     *time.Time             `json:"eventTime,omitempty"`
	GeofenceID    *int64                 `json:"geofenceId,omitempty"`
	ID            *int64                 `json:"id,omitempty"`
	MaintenanceID *int64                 `json:"maintenanceId,omitempty"`
	PositionID    *int64                 `json:"positionId,omitempty"`
	Type          *string                `json:"type,omitempty"`
}
