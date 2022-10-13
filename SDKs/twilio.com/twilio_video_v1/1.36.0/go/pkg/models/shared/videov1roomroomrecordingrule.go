package shared

import (
	"time"
)

type VideoV1RoomRoomRecordingRuleRules struct {
	All       *bool   `json:"all"`
	Kind      *string `json:"kind"`
	Publisher *string `json:"publisher"`
	Track     *string `json:"track"`
	Type      *string `json:"type"`
}

type VideoV1RoomRoomRecordingRule struct {
	DateCreated *time.Time                          `json:"date_created"`
	DateUpdated *time.Time                          `json:"date_updated"`
	RoomSid     *string                             `json:"room_sid"`
	Rules       []VideoV1RoomRoomRecordingRuleRules `json:"rules"`
}
