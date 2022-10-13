package shared

import (
	"time"
)

type AlertNotificationInfo struct {
	Address       *string    `json:"address"`
	ChannelType   *int32     `json:"channelType"`
	DeviceName    *string    `json:"deviceName"`
	LastUpdate    *time.Time `json:"lastUpdate"`
	MessageStatus *int32     `json:"messageStatus"`
	UserID        *string    `json:"userId"`
	UserStatus    *int32     `json:"userStatus"`
}
