package shared

import (
	"time"
)

type EventSourceEndpointInfo struct {
	Address         *string    `json:"address,omitempty"`
	GroupID         *string    `json:"groupId,omitempty"`
	LastEventRaised *time.Time `json:"lastEventRaised,omitempty"`
	SubscriptionID  *string    `json:"subscriptionId,omitempty"`
	TeamID          *string    `json:"teamId,omitempty"`
	Type            *int32     `json:"type,omitempty"`
}
