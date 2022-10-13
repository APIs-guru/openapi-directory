package shared

import (
	"time"
)

type VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules struct {
	All       *bool   `json:"all"`
	Kind      *string `json:"kind"`
	Priority  *string `json:"priority"`
	Publisher *string `json:"publisher"`
	Track     *string `json:"track"`
	Type      *string `json:"type"`
}

type VideoV1RoomRoomParticipantRoomParticipantSubscribeRule struct {
	DateCreated    *time.Time                                                    `json:"date_created"`
	DateUpdated    *time.Time                                                    `json:"date_updated"`
	ParticipantSid *string                                                       `json:"participant_sid"`
	RoomSid        *string                                                       `json:"room_sid"`
	Rules          []VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules `json:"rules"`
}
