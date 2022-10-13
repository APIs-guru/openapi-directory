package shared

import (
	"time"
)

type Event struct {
	Attributes    map[string]interface{} `json:"attributes"`
	DeviceID      *int64                 `json:"deviceId"`
	EventTime     *time.Time             `json:"eventTime"`
	GeofenceID    *int64                 `json:"geofenceId"`
	ID            *int64                 `json:"id"`
	MaintenanceID *int64                 `json:"maintenanceId"`
	PositionID    *int64                 `json:"positionId"`
	Type          *string                `json:"type"`
}
