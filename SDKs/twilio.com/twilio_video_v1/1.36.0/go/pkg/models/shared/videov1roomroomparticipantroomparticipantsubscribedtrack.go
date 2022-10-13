package shared

import (
	"time"
)

type VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack struct {
	DateCreated    *time.Time                                  `json:"date_created"`
	DateUpdated    *time.Time                                  `json:"date_updated"`
	Enabled        *bool                                       `json:"enabled"`
	Kind           *RoomParticipantSubscribedTrackEnumKindEnum `json:"kind"`
	Name           *string                                     `json:"name"`
	ParticipantSid *string                                     `json:"participant_sid"`
	PublisherSid   *string                                     `json:"publisher_sid"`
	RoomSid        *string                                     `json:"room_sid"`
	Sid            *string                                     `json:"sid"`
	URL            *string                                     `json:"url"`
}
