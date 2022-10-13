package shared

import (
	"time"
)

type EventSourceEndpointInfo struct {
	Address         *string    `json:"address"`
	GroupID         *string    `json:"groupId"`
	LastEventRaised *time.Time `json:"lastEventRaised"`
	SubscriptionID  *string    `json:"subscriptionId"`
	TeamID          *string    `json:"teamId"`
	Type            *int32     `json:"type"`
}
