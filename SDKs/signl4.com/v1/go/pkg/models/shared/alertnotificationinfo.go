package shared

import (
"time")

type AlertNotificationInfo struct {
    Address *string `json:"address,omitempty"`
    ChannelType *int32 `json:"channelType,omitempty"`
    DeviceName *string `json:"deviceName,omitempty"`
    LastUpdate *time.Time `json:"lastUpdate,omitempty"`
    MessageStatus *int32 `json:"messageStatus,omitempty"`
    UserID *string `json:"userId,omitempty"`
    UserStatus *int32 `json:"userStatus,omitempty"`
    
}

