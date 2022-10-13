package shared

import (
	"time"
)

type User struct {
	Administrator    *bool                  `json:"administrator"`
	Attributes       map[string]interface{} `json:"attributes"`
	CoordinateFormat *string                `json:"coordinateFormat"`
	DeviceLimit      *int64                 `json:"deviceLimit"`
	DeviceReadonly   *bool                  `json:"deviceReadonly"`
	Disabled         *bool                  `json:"disabled"`
	Email            *string                `json:"email"`
	ExpirationTime   *time.Time             `json:"expirationTime"`
	ID               *int64                 `json:"id"`
	Latitude         *float64               `json:"latitude"`
	LimitCommands    *bool                  `json:"limitCommands"`
	Longitude        *float64               `json:"longitude"`
	Map              *string                `json:"map"`
	Name             *string                `json:"name"`
	Password         *string                `json:"password"`
	Phone            *string                `json:"phone"`
	PoiLayer         *string                `json:"poiLayer"`
	Readonly         *bool                  `json:"readonly"`
	Token            *string                `json:"token"`
	TwelveHourFormat *bool                  `json:"twelveHourFormat"`
	UserLimit        *int64                 `json:"userLimit"`
	Zoom             *int64                 `json:"zoom"`
}
