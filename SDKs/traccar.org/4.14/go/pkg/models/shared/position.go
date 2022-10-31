package shared

import (
"time")

type Position struct {
    Accuracy *float64 `json:"accuracy,omitempty"`
    Address *string `json:"address,omitempty"`
    Altitude *float64 `json:"altitude,omitempty"`
    Attributes map[string]interface{} `json:"attributes,omitempty"`
    Course *float64 `json:"course,omitempty"`
    DeviceID *int64 `json:"deviceId,omitempty"`
    DeviceTime *time.Time `json:"deviceTime,omitempty"`
    FixTime *time.Time `json:"fixTime,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    Network map[string]interface{} `json:"network,omitempty"`
    Outdated *bool `json:"outdated,omitempty"`
    Protocol *string `json:"protocol,omitempty"`
    ServerTime *time.Time `json:"serverTime,omitempty"`
    Speed *float64 `json:"speed,omitempty"`
    Valid *bool `json:"valid,omitempty"`
    
}

