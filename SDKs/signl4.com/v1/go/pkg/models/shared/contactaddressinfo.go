package shared

import (
	"time"
)

type ContactAddressInfo struct {
	Address     *string    `json:"address"`
	Channel     *int32     `json:"channel"`
	Created     *time.Time `json:"created"`
	Device      *Device    `json:"device"`
	ID          *string    `json:"id"`
	LastUpdated *time.Time `json:"lastUpdated"`
	Options     *int32     `json:"options"`
	UserID      *string    `json:"userId"`
}
