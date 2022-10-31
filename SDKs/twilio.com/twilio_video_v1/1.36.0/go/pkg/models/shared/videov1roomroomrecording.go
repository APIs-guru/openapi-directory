package shared

import (
"time")

type VideoV1RoomRoomRecording struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Codec *RoomRecordingEnumCodecEnum `json:"codec,omitempty"`
    ContainerFormat *RoomRecordingEnumFormatEnum `json:"container_format,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    GroupingSids *interface{} `json:"grouping_sids,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    MediaExternalLocation *string `json:"media_external_location,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    RoomSid *string `json:"room_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Size *int64 `json:"size,omitempty"`
    SourceSid *string `json:"source_sid,omitempty"`
    Status *RoomRecordingEnumStatusEnum `json:"status,omitempty"`
    TrackName *string `json:"track_name,omitempty"`
    Type *RoomRecordingEnumTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

