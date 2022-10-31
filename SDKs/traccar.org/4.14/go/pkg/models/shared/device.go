package shared

import (
"time")

type Device struct {
    Attributes map[string]interface{} `json:"attributes,omitempty"`
    Category *string `json:"category,omitempty"`
    Contact *string `json:"contact,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    GeofenceIds []int64 `json:"geofenceIds,omitempty"`
    GroupID *int64 `json:"groupId,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdate *time.Time `json:"lastUpdate,omitempty"`
    Model *string `json:"model,omitempty"`
    Name *string `json:"name,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PositionID *int64 `json:"positionId,omitempty"`
    Status *string `json:"status,omitempty"`
    UniqueID *string `json:"uniqueId,omitempty"`
    
}

