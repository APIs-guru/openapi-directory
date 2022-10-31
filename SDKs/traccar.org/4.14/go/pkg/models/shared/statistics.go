package shared

import (
"time")

type Statistics struct {
    ActiveDevices *int64 `json:"activeDevices,omitempty"`
    ActiveUsers *int64 `json:"activeUsers,omitempty"`
    CaptureTime *time.Time `json:"captureTime,omitempty"`
    MessagesReceived *int64 `json:"messagesReceived,omitempty"`
    MessagesStored *int64 `json:"messagesStored,omitempty"`
    Requests *int64 `json:"requests,omitempty"`
    
}

