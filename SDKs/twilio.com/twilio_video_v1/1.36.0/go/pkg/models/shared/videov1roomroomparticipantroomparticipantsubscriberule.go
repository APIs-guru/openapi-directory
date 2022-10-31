package shared

import (
"time")

type VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules struct {
    All *bool `json:"all,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Priority *string `json:"priority,omitempty"`
    Publisher *string `json:"publisher,omitempty"`
    Track *string `json:"track,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type VideoV1RoomRoomParticipantRoomParticipantSubscribeRule struct {
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    ParticipantSid *string `json:"participant_sid,omitempty"`
    RoomSid *string `json:"room_sid,omitempty"`
    Rules []VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules `json:"rules,omitempty"`
    
}

