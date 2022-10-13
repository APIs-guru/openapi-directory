package shared

import (
	"time"
)

type VideoV1RoomRoomRecording struct {
	AccountSid            *string                      `json:"account_sid"`
	Codec                 *RoomRecordingEnumCodecEnum  `json:"codec"`
	ContainerFormat       *RoomRecordingEnumFormatEnum `json:"container_format"`
	DateCreated           *time.Time                   `json:"date_created"`
	Duration              *int64                       `json:"duration"`
	GroupingSids          *interface{}                 `json:"grouping_sids"`
	Links                 map[string]interface{}       `json:"links"`
	MediaExternalLocation *string                      `json:"media_external_location"`
	Offset                *int64                       `json:"offset"`
	RoomSid               *string                      `json:"room_sid"`
	Sid                   *string                      `json:"sid"`
	Size                  *int64                       `json:"size"`
	SourceSid             *string                      `json:"source_sid"`
	Status                *RoomRecordingEnumStatusEnum `json:"status"`
	TrackName             *string                      `json:"track_name"`
	Type                  *RoomRecordingEnumTypeEnum   `json:"type"`
	URL                   *string                      `json:"url"`
}
