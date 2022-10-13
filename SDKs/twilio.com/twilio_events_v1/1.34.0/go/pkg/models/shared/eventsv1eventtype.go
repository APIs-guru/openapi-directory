package shared

import (
	"time"
)

type EventsV1EventType struct {
	DateCreated *time.Time             `json:"date_created"`
	DateUpdated *time.Time             `json:"date_updated"`
	Description *string                `json:"description"`
	Links       map[string]interface{} `json:"links"`
	SchemaID    *string                `json:"schema_id"`
	Type        *string                `json:"type"`
	URL         *string                `json:"url"`
}
