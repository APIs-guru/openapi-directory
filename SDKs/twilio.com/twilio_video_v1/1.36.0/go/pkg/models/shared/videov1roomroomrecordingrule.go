package shared

import (
	"time"
)

type VideoV1RoomRoomRecordingRuleRules struct {
	All       *bool   `json:"all,omitempty"`
	Kind      *string `json:"kind,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	Track     *string `json:"track,omitempty"`
	Type      *string `json:"type,omitempty"`
}

type VideoV1RoomRoomRecordingRule struct {
	DateCreated *time.Time                          `json:"date_created,omitempty"`
	DateUpdated *time.Time                          `json:"date_updated,omitempty"`
	RoomSid     *string                             `json:"room_sid,omitempty"`
	Rules       []VideoV1RoomRoomRecordingRuleRules `json:"rules,omitempty"`
}
