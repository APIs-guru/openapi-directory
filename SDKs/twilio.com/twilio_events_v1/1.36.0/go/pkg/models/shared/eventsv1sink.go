package shared

import (
	"time"
)

type EventsV1Sink struct {
	DateCreated       *time.Time             `json:"date_created,omitempty"`
	DateUpdated       *time.Time             `json:"date_updated,omitempty"`
	Description       *string                `json:"description,omitempty"`
	Links             map[string]interface{} `json:"links,omitempty"`
	Sid               *string                `json:"sid,omitempty"`
	SinkConfiguration *interface{}           `json:"sink_configuration,omitempty"`
	SinkType          *SinkEnumSinkTypeEnum  `json:"sink_type,omitempty"`
	Status            *SinkEnumStatusEnum    `json:"status,omitempty"`
	URL               *string                `json:"url,omitempty"`
}
