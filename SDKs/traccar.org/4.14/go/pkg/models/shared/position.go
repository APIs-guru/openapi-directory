package shared

import (
	"time"
)

type Position struct {
	Accuracy   *float64               `json:"accuracy"`
	Address    *string                `json:"address"`
	Altitude   *float64               `json:"altitude"`
	Attributes map[string]interface{} `json:"attributes"`
	Course     *float64               `json:"course"`
	DeviceID   *int64                 `json:"deviceId"`
	DeviceTime *time.Time             `json:"deviceTime"`
	FixTime    *time.Time             `json:"fixTime"`
	ID         *int64                 `json:"id"`
	Latitude   *float64               `json:"latitude"`
	Longitude  *float64               `json:"longitude"`
	Network    map[string]interface{} `json:"network"`
	Outdated   *bool                  `json:"outdated"`
	Protocol   *string                `json:"protocol"`
	ServerTime *time.Time             `json:"serverTime"`
	Speed      *float64               `json:"speed"`
	Valid      *bool                  `json:"valid"`
}
