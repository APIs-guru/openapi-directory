package shared

import (
	"time"
)

type Statistics struct {
	ActiveDevices    *int64     `json:"activeDevices"`
	ActiveUsers      *int64     `json:"activeUsers"`
	CaptureTime      *time.Time `json:"captureTime"`
	MessagesReceived *int64     `json:"messagesReceived"`
	MessagesStored   *int64     `json:"messagesStored"`
	Requests         *int64     `json:"requests"`
}
