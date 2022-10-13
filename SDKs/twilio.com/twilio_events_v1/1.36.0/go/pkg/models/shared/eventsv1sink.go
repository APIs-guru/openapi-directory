package shared

import (
	"time"
)

type EventsV1Sink struct {
	DateCreated       *time.Time             `json:"date_created"`
	DateUpdated       *time.Time             `json:"date_updated"`
	Description       *string                `json:"description"`
	Links             map[string]interface{} `json:"links"`
	Sid               *string                `json:"sid"`
	SinkConfiguration *interface{}           `json:"sink_configuration"`
	SinkType          *SinkEnumSinkTypeEnum  `json:"sink_type"`
	Status            *SinkEnumStatusEnum    `json:"status"`
	URL               *string                `json:"url"`
}
