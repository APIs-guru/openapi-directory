package shared

import (
	"time"
)

type User struct {
	Administrator    *bool                  `json:"administrator,omitempty"`
	Attributes       map[string]interface{} `json:"attributes,omitempty"`
	CoordinateFormat *string                `json:"coordinateFormat,omitempty"`
	DeviceLimit      *int64                 `json:"deviceLimit,omitempty"`
	DeviceReadonly   *bool                  `json:"deviceReadonly,omitempty"`
	Disabled         *bool                  `json:"disabled,omitempty"`
	Email            *string                `json:"email,omitempty"`
	ExpirationTime   *time.Time             `json:"expirationTime,omitempty"`
	ID               *int64                 `json:"id,omitempty"`
	Latitude         *float64               `json:"latitude,omitempty"`
	LimitCommands    *bool                  `json:"limitCommands,omitempty"`
	Longitude        *float64               `json:"longitude,omitempty"`
	Map              *string                `json:"map,omitempty"`
	Name             *string                `json:"name,omitempty"`
	Password         *string                `json:"password,omitempty"`
	Phone            *string                `json:"phone,omitempty"`
	PoiLayer         *string                `json:"poiLayer,omitempty"`
	Readonly         *bool                  `json:"readonly,omitempty"`
	Token            *string                `json:"token,omitempty"`
	TwelveHourFormat *bool                  `json:"twelveHourFormat,omitempty"`
	UserLimit        *int64                 `json:"userLimit,omitempty"`
	Zoom             *int64                 `json:"zoom,omitempty"`
}
