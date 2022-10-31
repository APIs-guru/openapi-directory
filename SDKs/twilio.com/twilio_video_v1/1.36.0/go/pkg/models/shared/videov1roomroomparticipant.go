package shared

import (
"time")

type VideoV1RoomRoomParticipant struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    EndTime *time.Time `json:"end_time,omitempty"`
    Identity *string `json:"identity,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    RoomSid *string `json:"room_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    StartTime *time.Time `json:"start_time,omitempty"`
    Status *RoomParticipantEnumStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

