package shared

import (
"time")

type VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack struct {
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Kind *RoomParticipantSubscribedTrackEnumKindEnum `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    ParticipantSid *string `json:"participant_sid,omitempty"`
    PublisherSid *string `json:"publisher_sid,omitempty"`
    RoomSid *string `json:"room_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

