package shared

import (
	"time"
)

type Device struct {
	Attributes  map[string]interface{} `json:"attributes"`
	Category    *string                `json:"category"`
	Contact     *string                `json:"contact"`
	Disabled    *bool                  `json:"disabled"`
	GeofenceIds []int64                `json:"geofenceIds"`
	GroupID     *int64                 `json:"groupId"`
	ID          *int64                 `json:"id"`
	LastUpdate  *time.Time             `json:"lastUpdate"`
	Model       *string                `json:"model"`
	Name        *string                `json:"name"`
	Phone       *string                `json:"phone"`
	PositionID  *int64                 `json:"positionId"`
	Status      *string                `json:"status"`
	UniqueID    *string                `json:"uniqueId"`
}
