package shared

import (
	"time"
)

type VideoV1RoomRoomParticipantRoomParticipantPublishedTrack struct {
	DateCreated    *time.Time                                 `json:"date_created"`
	DateUpdated    *time.Time                                 `json:"date_updated"`
	Enabled        *bool                                      `json:"enabled"`
	Kind           *RoomParticipantPublishedTrackEnumKindEnum `json:"kind"`
	Name           *string                                    `json:"name"`
	ParticipantSid *string                                    `json:"participant_sid"`
	RoomSid        *string                                    `json:"room_sid"`
	Sid            *string                                    `json:"sid"`
	URL            *string                                    `json:"url"`
}
